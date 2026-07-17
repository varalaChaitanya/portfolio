import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group

        flex
        flex-col

        items-center
        justify-center

        rounded-2xl

        border
        border-slate-300/40

        bg-white/60

        p-6

        shadow-lg

        backdrop-blur-xl

        transition-all
        duration-300

        hover:border-blue-500/50
        hover:shadow-blue-500/20

        dark:border-slate-700/50
        dark:bg-slate-900/60

        min-h-[190px]
      "
    >
      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: 10,
          scale: 1.15,
        }}
        transition={{
          duration: 0.25,
        }}
        className="mb-5"
      >
        <Icon
          size={54}
          style={{
            color: skill.color,
          }}
        />
      </motion.div>

      {/* Skill Name */}

      <h3
        className="
          text-lg
          font-semibold
        "
      >
        {skill.name}
      </h3>

      {/* Level */}

      <span
        className="
          mt-4

          rounded-full

          bg-blue-500/10

          px-4
          py-1.5

          text-sm

          font-medium

          text-blue-500
        "
      >
        {skill.level}
      </span>
    </motion.div>
  );
};

export default SkillCard;