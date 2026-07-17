import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

const HeroButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
      }}
      className="
      mt-10
  flex
  flex-col
  items-center
  justify-center
  gap-4

  sm:flex-row
  sm:justify-center

  lg:justify-start
  lg:items-center
      "
    >
      {/* Resume Button */}

      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.03,
          y: -3,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="
          group

          flex
          items-center
          justify-center
          gap-2

          rounded-full

          bg-gradient-to-r
          from-sky-500
          via-blue-600
          to-indigo-700

          px-7
          py-4

          font-semibold
          text-white

          shadow-lg
          shadow-blue-500/30

          transition-all
        "
      >
        <Download size={18} />

        Resume

        <motion.span
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          ↓
        </motion.span>
      </motion.a>

      {/* Projects Button */}

      <Link
      to="projects"
  smooth
  duration={500}
  offset={-80}
  className="flex"
      >
        <motion.button
          whileHover={{
            scale: 1.03,
            y: -3,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="
            group

            flex
            items-center
            justify-center
            gap-2

            rounded-full

            border

            border-slate-300/40

            bg-white/60

            px-7
            py-4

            font-semibold

            backdrop-blur-xl

            shadow-lg

            transition-all

            dark:border-slate-700

            dark:bg-slate-900/60
          "
        >
          View Projects

          <motion.div
            animate={{
              x: [0, 4, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.3,
            }}
          >
            <ArrowRight size={18} />
          </motion.div>
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default HeroButtons;