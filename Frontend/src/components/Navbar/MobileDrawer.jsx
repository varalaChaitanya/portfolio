import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";

import Logo from "./Logo";
import { navLinks } from "./NavLinks";

const drawerVariants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 28,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.25,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const MobileDrawer = ({ isOpen, closeDrawer }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeDrawer}
            className="
              fixed
              inset-0
              z-40
              bg-black/50
              backdrop-blur-md
              lg:hidden
            "
          />

          {/* Drawer */}

          <motion.aside
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed
              right-0
              top-0
              z-50

              flex
              h-screen
              w-[300px]
              flex-col

              border-l
              border-white/10

              bg-white/70
              dark:bg-slate-950/75

              backdrop-blur-3xl

              shadow-2xl

              lg:hidden
            "
          >
            {/* Top */}

            <div className="flex items-center justify-between p-6">

              <Logo />

              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ rotate: 90 }}
                onClick={closeDrawer}
                className="
                  rounded-full
                  p-2
                  transition
                  hover:bg-slate-200
                  dark:hover:bg-slate-800
                "
              >
                <X size={22} />
              </motion.button>

            </div>

            {/* Divider */}

            <div className="mx-6 h-px bg-slate-300 dark:bg-slate-700" />

            {/* Navigation */}

            <nav className="mt-10 flex flex-col gap-2 px-6">

              {navLinks.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                >
                  <Link
                    to={item.to}
                    smooth
                    duration={500}
                    offset={-80}
                    spy
                    onClick={closeDrawer}
                    activeClass="mobile-active"
                    className="
                      group

                      flex
                      cursor-pointer
                      items-center

                      rounded-xl

                      px-5
                      py-4

                      text-lg
                      font-medium

                      transition-all
                      duration-300

                      hover:bg-blue-500/10
                    "
                  >
                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-blue-500

                        opacity-0

                        transition

                        duration-300

                        group-hover:opacity-100
                      "
                    />

                    <span className="ml-4">
                      {item.title}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom */}

            <div className="mt-auto p-6">

              <div className="rounded-xl border border-slate-300/40 bg-white/50 p-4 dark:border-slate-700 dark:bg-slate-900/50">

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Building modern web experiences with React, Node.js and Python.
                </p>

              </div>

            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;