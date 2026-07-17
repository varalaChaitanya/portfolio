import { motion } from "framer-motion";

const HeroDescription = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.6,
        duration: 0.8,
      }}
      className="mt-8 max-w-2xl"
    >
      <p
        className="
          text-lg
          leading-9
          text-slate-600
          dark:text-slate-300
        "
      >
        I build
        <span className="font-semibold text-blue-500">
          {" "}scalable{" "}
        </span>
        and
        <span className="font-semibold text-blue-500">
          {" "}user-focused{" "}
        </span>
        web applications using React, Node.js, Express.js,
        MongoDB, and Python while continuously improving my
        problem-solving skills through Data Structures and
        Algorithms.
      </p>

      {/* Small Highlight */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.1,
        }}
        className="
          mt-6
          inline-flex
          items-center
          gap-2

          rounded-full

          border
          border-blue-500/20

          bg-blue-500/10

          px-4
          py-2

          text-sm
          font-medium
          text-blue-500

          backdrop-blur-xl
        "
      >
        🚀 Currently building modern Full Stack applications
      </motion.div>
    </motion.div>
  );
};

export default HeroDescription;