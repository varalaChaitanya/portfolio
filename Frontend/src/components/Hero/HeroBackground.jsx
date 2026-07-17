import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <>
      {/* Grid Background */}

      <div
        className="
          absolute
          inset-0
          -z-20

          bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)]

          bg-[size:55px_55px]

          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
        "
      />

      {/* Top Left Glow */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-32
          -left-28
          -z-10

          h-[420px]
          w-[420px]

          rounded-full

          bg-sky-500/20

          blur-[120px]
        "
      />

      {/* Bottom Right Glow */}

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-40
          -right-32
          -z-10

          h-[450px]
          w-[450px]

          rounded-full

          bg-indigo-500/20

          blur-[130px]
        "
      />

      {/* Center Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          -z-10

          h-[280px]
          w-[280px]

          rounded-full

          bg-blue-500/20

          blur-[90px]
        "
      />

      {/* Decorative Dots */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(12)].map((_, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -12, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
            }}
            className="absolute h-2 w-2 rounded-full bg-sky-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default HeroBackground;