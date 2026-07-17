import { AnimatePresence, motion } from "framer-motion";

const DeleteDialog = ({
  isOpen,
  onClose,
  onDelete,
  loading,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50"
          />

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              left-1/2
              top-1/2
              z-50
              w-[90%]
              max-w-md
              -translate-x-1/2
              -translate-y-1/2
              rounded-3xl
              bg-white
              p-8
              shadow-2xl
              dark:bg-slate-900
            "
          >
            <h2 className="text-2xl font-bold">
              Delete Project
            </h2>

            <p className="mt-4 text-slate-500">
              This action cannot be undone.
            </p>

            <div className="mt-8 flex justify-end gap-4">
              <button
                onClick={onClose}
                className="
                  rounded-xl
                  border
                  px-5
                  py-3
                "
              >
                Cancel
              </button>

              <button
                onClick={onDelete}
                disabled={loading}
                className="
                  rounded-xl
                  bg-red-600
                  px-5
                  py-3
                  text-white
                "
              >
                {loading
                  ? "Deleting..."
                  : "Delete"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DeleteDialog;