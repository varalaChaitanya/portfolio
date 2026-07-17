import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navLinks } from "./NavLinks";

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navLinks.map((item) => (
        <Link
          key={item.id}
          to={item.to}
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          activeClass="active-nav"
          className="group relative cursor-pointer"
        >
          <motion.span
            whileHover={{ y: -2 }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="
              relative
              px-1
              py-2
              text-[15px]
              font-medium
              text-slate-700
              dark:text-slate-200
              transition-colors
              duration-300
              group-hover:text-blue-500
            "
          >
            {item.title}

            {/* Hover Underline */}

            <span
              className="
                absolute
                bottom-0
                left-0
                h-[2px]
                w-0
                rounded-full
                bg-gradient-to-r
                from-sky-400
                via-blue-500
                to-indigo-600
                transition-all
                duration-300
                group-hover:w-full
              "
            />

            {/* Small Dot */}

            <span
              className="
                absolute
                -bottom-[6px]
                left-1/2
                h-1
                w-1
                -translate-x-1/2
                rounded-full
                bg-blue-500
                opacity-0
                transition-all
                duration-300
                group-hover:opacity-100
              "
            />
          </motion.span>
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;