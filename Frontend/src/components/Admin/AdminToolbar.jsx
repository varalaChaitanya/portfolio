import { Plus } from "lucide-react";

const AdminToolbar = ({ onAdd }) => {
  return (
    <div className="mb-12 flex justify-end">
      <button
        onClick={onAdd}
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
          shadow-lg
        "
      >
        <Plus size={20} />

        Add Project
      </button>
    </div>
  );
};

export default AdminToolbar;