import { motion } from "motion/react";

export default function AboutDescription() {
  return (
    <>
      {/* Description 1 */}
      <motion.p
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
        transition={{
          delay: 0.35,
        }}
        className="
          mt-8
          text-lg
          leading-8
          text-slate-600
          dark:text-slate-400
        "
      >
        Hello, I'm Yohanes Dimas Pratama, an Informatics Engineering graduate
        from Universitas Dian Nuswantoro with a strong passion for technology,
        data, and digital innovation.
      </motion.p>

      {/* Description 2 */}
      <motion.p
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
        transition={{
          delay: 0.5,
        }}
        className="
          mt-5
          text-lg
          leading-8
          text-slate-600
          dark:text-slate-400
        "
      >
        Throughout my academic and professional journey, I have developed skills
        in Data Analytics, Web Development, Machine Learning, and UI/UX Design.
        I enjoy transforming complex problems into efficient and meaningful
        digital solutions by combining technical knowledge with analytical
        thinking and creativity.
      </motion.p>
      {/* Description 3 */}
      <motion.p
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
        transition={{
          delay: 0.5,
        }}
        className="
          mt-5
          text-lg
          leading-8
          text-slate-600
          dark:text-slate-400
        "
      >
        I have experience working on web development projects, data-driven
        tasks, content creation, and customer-oriented services. These
        experiences have helped me develop not only technical abilities but also
        strong communication, problem-solving, teamwork, and adaptability
        skills.
      </motion.p>
      {/* Description 4 */}
      <motion.p
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
        transition={{
          delay: 0.5,
        }}
        className="
          mt-5
          text-lg
          leading-8
          text-slate-600
          dark:text-slate-400
        "
      >
        I am a detail-oriented person who values continuous learning,
        efficiency, and quality in every project I work on. I am always eager to
        explore new technologies, improve my skills, and contribute to impactful
        solutions in a professional environment.
      </motion.p>
    </>
  );
}
