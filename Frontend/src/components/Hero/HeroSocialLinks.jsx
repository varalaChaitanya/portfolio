import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";





const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    icon: FaGithub,
    href: `https://github.com/${import.meta.env.VITE_GITHUB_USERNAME}`,
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: FaLinkedin,
    href: `https://linkedin.com/in/${import.meta.env.VITE_LINKDIN_USERNAME}`,
  },
  {
    id: 3,
    name: "LeetCode",
    icon: SiLeetcode,
    href: `https://leetcode.com/${import.meta.env.VITE_LEETCODE_USERNAME}`,
  },
  {
    id: 4,
    name: "Email",
    icon: FaEnvelope,
    href: `mailto:${import.meta.env.VITE_EMAIL}@gmail.com`,
  },
];

const HeroSocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.7,
        duration: 0.8,
      }}
      className="
        mt-10

        w-full

        flex
        flex-wrap

        items-center
        justify-center

        gap-5

        lg:justify-start
      "
    >
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.12,
              y: -5,
            }}
            whileTap={{
              scale: 0.92,
            }}
            className="
              flex
              h-12
              w-12

              items-center
              justify-center

              rounded-full

              border
              border-slate-300/40

              bg-white/60

              shadow-lg

              backdrop-blur-xl

              transition-all
              duration-300

              hover:border-blue-500
              hover:text-blue-500

              dark:border-slate-700
              dark:bg-slate-900/60
            "
            aria-label={item.name}
          >
            <Icon size={20} />
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default HeroSocialLinks;