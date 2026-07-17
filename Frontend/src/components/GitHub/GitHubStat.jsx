import { motion } from "framer-motion";

const GitHubStat = ({
  title,
  value,
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

        p-5

        shadow-md
      "
    >
      <h3
        className="
          text-sm

          font-semibold

          text-slate-500
          dark:text-slate-400
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2

          text-3xl

          font-black

          text-slate-900
          dark:text-white
        "
      >
        {value}
      </p>
    </motion.div>
  );
};

export default GitHubStat;