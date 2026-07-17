import { motion } from "framer-motion";

const SkillHeader = () => {
  return (
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
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        mx-auto
        max-w-3xl
        text-center
      "
    >
      {/* Small Heading */}

      <span
        className="
          inline-block

          rounded-full

          border
          border-blue-500/20

          bg-blue-500/10

          px-5
          py-2

          text-sm
          font-semibold
          uppercase
          tracking-[0.25em]

          text-blue-500
        "
      >
        My Skills
      </span>

      {/* Main Heading */}

      <h2
        className="
          mt-6

          text-4xl

          font-black

          leading-tight

          sm:text-5xl
        "
      >
        Technologies{" "}

        <span
          className="
            bg-gradient-to-r
            from-sky-400
            via-blue-500
            to-cyan-400

            bg-clip-text

            text-transparent
          "
        >
          & Tools
        </span>

        <br />

        I Work With
      </h2>

      {/* Description */}

      <p
        className="
          mx-auto

          mt-8

          max-w-2xl

          text-lg

          leading-8

          text-slate-600

          dark:text-slate-300
        "
      >
        I enjoy building scalable, responsive and
        user-friendly web applications using modern
        frontend and backend technologies while
        continuously improving my software engineering
        and problem-solving skills.
      </p>
    </motion.div>
  );
};

export default SkillHeader;