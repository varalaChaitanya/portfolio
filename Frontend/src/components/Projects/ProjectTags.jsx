const ProjectTags = ({ technologies }) => {
  return (
    <div
      className="
        mt-5
        flex
        flex-wrap
        gap-2
      "
    >
      {technologies.map((tech) => (
        <span
          key={tech}
          className="
            rounded-full

            border
            border-blue-200
            dark:border-blue-500/30

            bg-blue-50
            dark:bg-blue-500/10

            px-3
            py-1.5

            text-sm
            font-medium

            text-blue-700
            dark:text-blue-300

            transition-all

            hover:scale-105
            hover:shadow-md
          "
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;