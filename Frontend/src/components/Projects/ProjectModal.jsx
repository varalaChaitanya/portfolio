import { AnimatePresence, motion } from "framer-motion";


import { X } from "lucide-react";

import { FaGithub, FaStar } from "react-icons/fa";

import { FiExternalLink } from "react-icons/fi";

import ProjectTags from "./ProjectTags";

const ProjectModal = ({
  isOpen,
  onClose,
  project,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-40

              bg-black/70

              backdrop-blur-md
            "
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed

              left-1/2
              top-1/2

              z-50

              max-h-[90vh]
              w-[95%]
              max-w-5xl

              -translate-x-1/2
              -translate-y-1/2

              overflow-y-auto

              rounded-3xl

              bg-white

              shadow-2xl

              dark:bg-slate-900
            "
          >
            {/* Close */}

            <button
              onClick={onClose}
              className="
                absolute

                right-5
                top-5

                z-20

                rounded-full

                bg-white/90

                p-2

                shadow-lg

                dark:bg-slate-800
              "
            >
              <X size={22} />
            </button>

            {/* Image */}

            <div className="relative">
              <img
                src={project.image.url}
                alt={project.title}
                className="
                  h-[340px]
                  w-full

                  object-cover
                "
              />

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

              {project.featured && (
                <div
                  className="
                    absolute

                    left-6
                    top-6

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

            {/* Content */}

            <div className="p-8">

              <h2
                className="
                  text-4xl

                  font-black
                "
              >
                {project.title}
              </h2>

              <ProjectTags
                technologies={
                  project.technologies
                }
              />

              <p
                className="
                  mt-8

                  leading-8

                  text-slate-600

                  dark:text-slate-400
                "
              >
                {project.description}
              </p>

              {/* Buttons */}

              <div
                className="
                  mt-10

                  flex

                  flex-wrap

                  gap-5
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

                    px-6
                    py-3

                    font-semibold

                    text-white

                    transition

                    hover:bg-blue-700
                  "
                >
                  <FiExternalLink size={20} />

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

                    px-6
                    py-3

                    font-semibold

                    transition

                    hover:bg-slate-100

                    dark:hover:bg-slate-800
                  "
                >
                  <FaGithub size={20} />

                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;