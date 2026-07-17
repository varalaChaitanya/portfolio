import { FolderOpen } from "lucide-react";

const EmptyProjects = () => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center

        py-24

        text-center
      "
    >
      <FolderOpen
        size={70}
        className="text-blue-500"
      />

      <h2
        className="
          mt-8

          text-3xl

          font-bold
        "
      >
        No Projects Yet
      </h2>

      <p
        className="
          mt-4

          max-w-lg

          text-slate-500
        "
      >
        Your projects will appear here after you add
        them through the Admin Panel.
      </p>
    </div>
  );
};

export default EmptyProjects;