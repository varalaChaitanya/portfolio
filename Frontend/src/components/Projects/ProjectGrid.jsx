import ProjectCard from "./ProjectCard";

const ProjectGrid = ({
  projects,
  onEdit,
  onDelete,
  onView,
}) => {
  return (
    <div
      className="
        grid
        gap-10
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          project={project}
          onEdit={onEdit}
          onDelete={onDelete}
          onView={onView}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;