import { useState } from "react";
import { motion } from "motion/react";

import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import BackgroundPattern from "../About/BackgroundPattern";

import CertificationCard from "./CertificationCard";

import CertificateModal from "./CertificationModal/CertificateModal";

import {
  certifications,
} from "./CertificationData";

export default function Certification() {
  const [showAll, setShowAll] = useState(false);

  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  // Urutkan certification berdasarkan ID dari terbesar ke terkecil.
  // Array asli "certifications" tidak diubah.
  const sortedCertifications = [...certifications].sort(
    (a, b) => b.id - a.id
  );

  // Default hanya menampilkan 3 certification dengan ID terbesar.
  const displayedCertificates = showAll
    ? sortedCertifications
    : sortedCertifications.slice(0, 3);

  return (
    <section
      id="certification"
      className="
        relative
        overflow-hidden
        py-24
        lg:py-32
      "
    >
      {/* Background */}

      <BackgroundPattern />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          sm:px-8
          lg:px-10
        "
      >
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mb-16
            text-center
          "
        >
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.35em]
              text-blue-500
            "
          >
            Training & Achievement
          </p>

          <h2
            className="
              mt-5
              text-4xl
              font-black
              text-slate-900
              dark:text-white
              md:text-5xl
            "
          >
            Certifications
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-lg
              leading-8
              text-slate-600
              dark:text-slate-400
            "
          >
            Professional certifications and training
            programs that represent my continuous
            learning journey and technical growth.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {displayedCertificates.map(
            (certificate, index) => (
              <CertificationCard
                key={certificate.id}
                certificate={certificate}
                index={index}
                onOpen={
                  setSelectedCertificate
                }
              />
            )
          )}
        </div>

        {/* Show More Button */}

        {certifications.length > 3 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-14
              flex
              justify-center
            "
          >
            <button
              type="button"
              onClick={() =>
                setShowAll((prev) => !prev)
              }
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                bg-blue-600
                px-8
                py-3.5
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-700
                hover:shadow-blue-500/40
              "
            >
              {showAll
                ? "Show Less"
                : "Show More"}

              {showAll ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal */}

      <CertificateModal
        certificate={
          selectedCertificate
        }
        onClose={() =>
          setSelectedCertificate(null)
        }
      />
    </section>
  );
}