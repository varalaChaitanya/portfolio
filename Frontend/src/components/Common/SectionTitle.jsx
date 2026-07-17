import { motion } from "framer-motion";

const SectionTitle = ({
  title,
  subtitle,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
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
      {/* Small Badge */}

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

          tracking-wide

          text-blue-600

          dark:text-blue-400
        "
      >
        Explore
      </span>

      {/* Title */}

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
        {title}
      </h2>

      {/* Subtitle */}

      <p
        className="
          mx-auto

          mt-5

          max-w-3xl

          text-lg

          leading-8

          text-slate-600

          dark:text-slate-400
        "
      >
        {subtitle}
      </p>

      {/* Decorative Line */}

      <div
        className="
          mx-auto

          mt-8

          h-1

          w-28

          rounded-full

          bg-gradient-to-r

          from-blue-500

          via-sky-400

          to-cyan-400
        "
      />
    </motion.div>
  );
};

export default SectionTitle;