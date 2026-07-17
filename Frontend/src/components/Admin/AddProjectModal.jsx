import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import ProjectForm from "./ProjectForm";
import projectInitialValues from "../../utils/projectInitialValues";

import { createProject } from "../../services/projectService";

const AddProjectModal = ({
  isOpen,
  onClose,
  refreshProjects,
}) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);

      await createProject(formData);

      refreshProjects();

      onClose();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to add project."
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
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
              shadow-2xl
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
              Add Project
            </h2>

            <ProjectForm
              initialValues={projectInitialValues}
              onSubmit={handleSubmit}
              loading={loading}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AddProjectModal;