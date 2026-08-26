import { useRef, useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

import {
  User,
  Mail,
  FileText,
  MessageSquare,
  Send,
  LoaderCircle,
} from "lucide-react";

// ==============================
// SECURITY HELPERS
// ==============================

function sanitizeInput(value = "") {
  return value
    .replace(/<script.*?>.*?<\/script>/gi, "")
    .replace(/<.*?>/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .trim();
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function containsAttackPattern(value = "") {
  const patterns = [
    /<script/i,
    /javascript:/i,
    /onerror=/i,
    /onclick=/i,
    /alert\(/i,
    /document\./i,
    /window\./i,
  ];

  return patterns.some((pattern) => pattern.test(value));
}

// ==============================
// COMPONENT
// ==============================

export default function ContactForm() {
  const form = useRef(null);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const [cooldown, setCooldown] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (loading || cooldown) {
      return;
    }

    const formElement = form.current;

    if (!formElement) {
      return;
    }

    const rawData = {
      name: formElement.name.value,
      email: formElement.email.value,
      subject: formElement.subject.value,
      message: formElement.message.value,
    };

    // ==============================
    // HONEYPOT
    // ==============================

    const honeypot = formElement.website.value;

    if (honeypot) {
      setStatus("Unable to send message.");

      return;
    }

    // ==============================
    // SANITIZE
    // ==============================

    const cleanData = {
      name: sanitizeInput(rawData.name),

      email: sanitizeInput(rawData.email),

      subject: sanitizeInput(rawData.subject),

      message: sanitizeInput(rawData.message),
    };

    // ==============================
    // VALIDATION
    // ==============================

    if (containsAttackPattern(JSON.stringify(rawData))) {
      setStatus("Invalid message detected.");

      return;
    }

    if (!validateEmail(cleanData.email)) {
      setStatus("Invalid email address.");

      return;
    }

    if (cleanData.message.length < 10 || cleanData.message.length > 2000) {
      setStatus("Message length is invalid.");

      return;
    }

    setLoading(true);

    setStatus("");

    try {
      formElement.name.value = cleanData.name;

      formElement.email.value = cleanData.email;

      formElement.subject.value = cleanData.subject;

      formElement.message.value = cleanData.message;

      await emailjs.sendForm(
        "service_4t5l0qa",

        "template_el2p2cz",

        formElement,

        "Vw6_-silX0BDhGrEP",
      );

      setStatus("Message sent successfully!");

      formElement.reset();

      // RATE LIMIT
      setCooldown(true);

      setTimeout(() => {
        setCooldown(false);
      }, 60000);
    } catch (error) {
      console.error("Email sending failed");

      setStatus("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `
    w-full
    rounded-2xl
    border
    border-slate-200
    bg-white/70
    px-5
    py-4
    text-slate-900
    outline-none
    transition-all
    duration-300
    placeholder:text-slate-400
    focus:border-blue-500
    focus:ring-4
    focus:ring-blue-500/20
    dark:border-slate-700
    dark:bg-slate-900/60
    dark:text-white
    dark:placeholder:text-slate-500
  `;

  return (
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white/70
        p-8
        shadow-xl
        backdrop-blur-xl
        dark:border-slate-800
        dark:bg-slate-900/60
      "
    >
      <div className="hidden">
        <input name="website" autoComplete="off" tabIndex="-1" />
      </div>

      <div className="space-y-6">
        <InputField
          icon={User}
          name="name"
          placeholder="Your name"
          type="text"
          maxLength="100"
        />

        <InputField
          icon={Mail}
          name="email"
          placeholder="Your email"
          type="email"
          maxLength="150"
        />

        <InputField
          icon={FileText}
          name="subject"
          placeholder="Subject"
          type="text"
          maxLength="150"
        />

        <div className="relative">
          <MessageSquare
            size={20}
            className="
              absolute
              left-5
              top-5
              text-slate-400
            "
          />

          <textarea
            name="message"
            required
            rows="5"
            maxLength="2000"
            placeholder="Your message"
            className={`
              ${inputClass}
              resize-none
              pl-14
            `}
          />
        </div>

        <motion.button
          type="submit"
          disabled={loading || cooldown}
          className="
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            px-6
            py-4
            font-bold
            text-white
            disabled:opacity-70
          "
        >
          {loading ? (
            <>
              <LoaderCircle className="animate-spin" />
              Sending...
            </>
          ) : cooldown ? (
            "Message Sent"
          ) : (
            <>
              Send Message
              <Send size={20} />
            </>
          )}
        </motion.button>

        {status && (
          <p
            className="
              text-center
              text-sm
              font-medium
              text-blue-600
            "
          >
            {status}
          </p>
        )}
      </div>
    </motion.form>
  );
}

function InputField({
  icon: Icon,

  name,

  placeholder,

  type,

  maxLength,
}) {
  return (
    <div className="relative">
      <Icon
        size={20}
        className="
absolute
left-5
top-1/2
-translate-y-1/2
text-slate-400
"
      />

      <input
        name={name}
        type={type}
        required
        maxLength={maxLength}
        placeholder={placeholder}
        className="
w-full
rounded-2xl
border
border-slate-200
bg-white/70
px-5
py-4
pl-14
outline-none
dark:border-slate-700
dark:bg-slate-900/60
dark:text-white
"
      />
    </div>
  );
}
