import { motion } from "framer-motion";


import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

import { useAdmin } from "../../context/AdminContext";
import ProjectTags from "./ProjectTags";

const ProjectCard = ({
  project,
  onEdit,
  onDelete,
}) => {
  const { isAdmin } = useAdmin();

  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl

        border
        border-slate-200

        bg-white

        shadow-xl

        transition-all

        hover:shadow-2xl

        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.5,
          }}
          src={project.image.url}
          alt={project.title}
          className="
            h-64
            w-full
            object-cover
          "
        />

        {/* Gradient */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-black/70
            via-transparent
            to-transparent
          "
        />

        {/* Featured */}

        {project.featured && (
          <div
            className="
              absolute
              left-4
              top-4

              flex
              items-center
              gap-2

              rounded-full

              bg-yellow-400

              px-4
              py-2

              font-semibold
              text-slate-900
            "
          >
            <FaStar size={16} />

            Featured
          </div>
        )}
      </div>

      {/* Body */}

      <div className="p-6">

        <h3
          className="
            text-2xl
            font-bold
          "
        >
          {project.title}
        </h3>

        {/* Technologies */}

        <ProjectTags
  technologies={project.technologies}
/>
          

        {/* Description */}

        <p
          className="
            mt-6

            leading-7

            text-slate-600

            dark:text-slate-400
          "
        >
          {project.description}
        </p>

        {/* Buttons */}

        <div
          className="
            mt-8

            flex

            flex-wrap

            gap-4
          "
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2

              rounded-full

              bg-blue-600

              px-5
              py-3

              font-semibold

              text-white

              transition

              hover:bg-blue-700
            "
          >
            <FiExternalLink size={18} />

            Live Demo
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2

              rounded-full

              border

              px-5
              py-3

              font-semibold

              transition

              hover:bg-slate-100

              dark:hover:bg-slate-800
            "
          >
            <FaGithub size={18} />

            GitHub
          </a>
        </div>

        {/* Admin Controls */}

        {isAdmin && (
          <div
            className="
              mt-8

              flex

              justify-end

              gap-3

              border-t

              pt-5
            "
          >
         <button
  onClick={(e) => {
    e.stopPropagation();
    onEdit(project);
  }}
  className="
    flex
    items-center
    gap-2

    rounded-full

    bg-amber-500

    px-4
    py-2

    text-white
  "
>
  <FiEdit size={18} />
  Edit
</button>

            <button
  onClick={(e) => {
    e.stopPropagation();
    onDelete(project);
  }}
  className="
    flex
    items-center
    gap-2

    rounded-full

    bg-red-600

    px-4
    py-2

    text-white
  "
>
  <RiDeleteBinLine size={18} />

  Delete
</button>
          </div>
        )}

      </div>
    </motion.div>
  );
};

export default ProjectCard;