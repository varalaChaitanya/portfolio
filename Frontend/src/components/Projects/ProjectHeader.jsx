import { motion } from "framer-motion";

const ProjectHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-blue-500">
        Portfolio
      </p>

      <h2 className="text-4xl font-black md:text-5xl">
        Featured Projects
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
        A collection of projects demonstrating my experience in
        Full Stack Development, problem solving, and modern web
        technologies.
      </p>
    </motion.div>
  );
};

export default ProjectHeader;