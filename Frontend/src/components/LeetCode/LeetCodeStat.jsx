import { motion } from "framer-motion";

const LeetCodeStat = ({
  title,
  value,
  color,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="
        flex
        flex-col
        items-center

        rounded-2xl

        bg-slate-100
        dark:bg-slate-800

        p-4

        shadow-md
      "
    >
      <h3
        className="text-sm font-semibold"
        style={{ color }}
      >
        {title}
      </h3>

      <p
        className="
          mt-2

          text-2xl

          font-black
        "
      >
        {value}
      </p>
    </motion.div>
  );
};

export default LeetCodeStat;