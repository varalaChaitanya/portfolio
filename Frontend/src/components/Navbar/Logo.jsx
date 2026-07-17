import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.a
      href="/"
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="flex items-center gap-3"
    >
      {/* Logo */}

      <motion.div
        whileHover={{
          rotate: 10,
          boxShadow: "0px 0px 35px rgba(59,130,246,.7)",
        }}
        transition={{
          duration: 0.3,
        }}
        className="
        relative

        flex
        h-12
        w-12

        items-center
        justify-center

        rounded-full

        bg-gradient-to-br
        from-sky-400
        via-blue-600
        to-indigo-700

        text-white

        font-extrabold

        text-lg

        shadow-lg

        shadow-blue-500/40

        overflow-hidden
        "
      >
        {/* Glow */}

        <div
          className="
          absolute

          h-24
          w-24

          rounded-full

          bg-blue-400/20

          blur-2xl
          "
        />

        <span className="relative z-10">
          CR
        </span>
      </motion.div>

      {/* Name */}

      <div className="hidden sm:block">
        <h2
          className="
          text-xl

          font-bold

          tracking-wide
          "
        >
          Chaitanya
        </h2>

        <p
          className="
          text-xs

          text-slate-500

          dark:text-slate-400
          "
        >
          Full Stack Developer
        </p>
      </div>
    </motion.a>
  );
};

export default Logo;