import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const technologies = [
  {
    id: 1,
    name: "React",
    icon: <FaReact className="text-sky-400" />,
  },
  {
    id: 2,
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
  },
  {
    id: 3,
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
  },
  {
    id: 4,
    name: "Python",
    icon: <FaPython className="text-yellow-400" />,
  },
  {
    id: 5,
    name: "Express",
    icon: <SiExpress className="text-slate-500 dark:text-slate-300" />,
  },
  {
    id: 6,
    name: "REST APIs",
    icon: (
      <span className="font-bold text-blue-500">
        API
      </span>
    ),
  },
];

const TechStack = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.8,
        duration: 0.8,
      }}
      className="
        mt-8

        flex
        flex-wrap

        sm:justify-center
        lg:justify-start



        gap-4
      "
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.id}
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2.5 + index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            y: -6,
            scale: 1.05,
            boxShadow:
              "0px 10px 30px rgba(59,130,246,.25)",
          }}
          className="
            flex
            items-center
            gap-2

            rounded-full

            border
            border-slate-300/40

            bg-white/60

            px-5
            py-3

            shadow-lg

            backdrop-blur-xl

            transition-all
            duration-300

            dark:border-slate-700/40
            dark:bg-slate-900/60
          "
        >
          <span className="text-xl">
            {tech.icon}
          </span>

          <span className="font-medium">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechStack;