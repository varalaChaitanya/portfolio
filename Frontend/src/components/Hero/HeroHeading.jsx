import { motion } from "framer-motion";

const HeroHeading = () => {
  return (
    <>
      {/* Greeting */}

      <motion.p
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
        className="
          mb-4
          text-lg
          font-medium
          text-blue-500
        "
      >
        👋 Hello, I'm
      </motion.p>

      {/* Name */}

      <motion.h1
        initial={{
          opacity: 0,
          x: -40,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="
          text-5xl
          font-black
          leading-tight

          sm:text-6xl

          lg:text-7xl
        "
      >
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
          Chaitanya
        </span>

        <br />

        <span>
          Reddy
        </span>
      </motion.h1>

      {/* Designation */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.45,
        }}
        className="
          mt-7

          text-2xl

          font-semibold

          tracking-wide

          text-blue-500
        "
      >
        Full Stack Developer
      </motion.h2>
    </>
  );
};

export default HeroHeading;