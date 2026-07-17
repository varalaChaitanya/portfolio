import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillCategory = ({ category }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        rounded-3xl

        border
        border-slate-300/40

        bg-white/60

        p-8

        shadow-xl

        backdrop-blur-xl

        dark:border-slate-700/40
        dark:bg-slate-900/60
      "
    >
      {/* Category Heading */}

      <div className="mb-8 flex items-center justify-between">
        <h2
          className="
            text-2xl
            font-bold
          "
        >
          {category.category}
        </h2>

        <span
          className="
            rounded-full

            bg-blue-500/10

            px-4
            py-1

            text-sm
            font-medium

            text-blue-500
          "
        >
          {category.technologies.length} Skills
        </span>
      </div>

      {/* Skills Grid */}

      <div
        className="
          grid

          grid-cols-1

          gap-6

          sm:grid-cols-2
        "
      >
        {category.technologies.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;