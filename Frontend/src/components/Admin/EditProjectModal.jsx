import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import ProjectForm from "./ProjectForm";
import { updateProject } from "../../services/projectService";

const EditProjectModal = ({
  isOpen,
  onClose,
  project,
  refreshProjects,
}) => {
  const [loading, setLoading] = useState(false);

  if (!project) return null;

  const initialValues = {
    title: project.title,
    slug: project.slug,
    description: project.description,
    technologies: project.technologies,
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
    displayOrder: project.displayOrder,
    featured: project.featured,
    image: null,
  };

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);

      await updateProject(project._id, formData);

      refreshProjects();

      onClose();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to update project."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              left-1/2
              top-1/2
              z-50
              max-h-[90vh]
              w-[95%]
              max-w-3xl
              -translate-x-1/2
              -translate-y-1/2
              overflow-y-auto
              rounded-3xl
              bg-white
              p-8
              dark:bg-slate-900
            "
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5"
            >
              <X />
            </button>

            <h2 className="mb-8 text-3xl font-bold">
              Edit Project
            </h2>

            <ProjectForm
              initialValues={initialValues}
              onSubmit={handleSubmit}
              loading={loading}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EditProjectModal;