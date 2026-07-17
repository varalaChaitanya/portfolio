import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{
        scale: 1.08,
        boxShadow: "0px 0px 20px rgba(59,130,246,.35)",
      }}
      whileTap={{
        scale: 0.92,
      }}
      transition={{
        duration: 0.25,
      }}
      aria-label="Toggle Theme"
      className="
      relative

      flex
      h-11
      w-11

      items-center
      justify-center

      overflow-hidden

      rounded-full

      border

      border-slate-300/60

      bg-white/60

      backdrop-blur-xl

      shadow-lg

      dark:border-slate-700/60

      dark:bg-slate-900/60
      "
    >
      {/* Glow */}

      <div
        className="
        absolute

        h-14
        w-14

        rounded-full

        bg-blue-500/10

        blur-xl
        "
      />

      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{
              rotate: -180,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              rotate: 180,
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="relative z-10"
          >
            <Sun
              size={20}
              className="text-yellow-400"
            />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{
              rotate: 180,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              rotate: -180,
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="relative z-10"
          >
            <Moon
              size={20}
              className="text-slate-700"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;