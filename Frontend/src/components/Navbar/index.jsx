import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileDrawer from "./MobileDrawer";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-300

          ${
            isScrolled
              ? `
                py-3
                bg-white/70
                dark:bg-slate-950/70
                backdrop-blur-2xl
                border-b
                border-white/10
                shadow-[0_8px_30px_rgba(0,0,0,0.15)]
              `
              : `
                py-5
                bg-transparent
              `
          }
        `}
      >
        {/* Blue Glow */}

        <div
          className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2

          h-32
          w-72

          rounded-full

          bg-blue-500/10

          blur-3xl

          pointer-events-none
          "
        />

        <div
          className="
          relative
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          "
        >
          {/* Logo */}

          <Logo />

          {/* Desktop Navigation */}

          <DesktopNav />

          {/* Right Side */}

          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile Menu */}

            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              whileHover={{
                scale: 1.05,
              }}
              onClick={() => setIsOpen(true)}
              className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-full

              border

              border-slate-300/60

              bg-white/60

              shadow-lg

              backdrop-blur-xl

              dark:border-slate-700/60

              dark:bg-slate-900/60

              lg:hidden
              "
            >
              <Menu size={22} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <MobileDrawer
        isOpen={isOpen}
        closeDrawer={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navbar;