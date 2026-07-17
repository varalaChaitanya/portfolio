const ProjectSkeleton = () => {
  return (
    <div
      className="
        animate-pulse

        overflow-hidden
        rounded-3xl

        border

        bg-white

        dark:bg-slate-900
      "
    >
      <div className="h-64 bg-slate-300 dark:bg-slate-700" />

      <div className="space-y-4 p-6">
        <div className="h-8 w-2/3 rounded bg-slate-300 dark:bg-slate-700" />

        <div className="flex gap-2">
          <div className="h-7 w-20 rounded-full bg-slate-300 dark:bg-slate-700" />
          <div className="h-7 w-20 rounded-full bg-slate-300 dark:bg-slate-700" />
          <div className="h-7 w-20 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>

        <div className="h-4 rounded bg-slate-300 dark:bg-slate-700" />
        <div className="h-4 rounded bg-slate-300 dark:bg-slate-700" />
        <div className="h-4 w-4/5 rounded bg-slate-300 dark:bg-slate-700" />

        <div className="mt-8 flex gap-4">
          <div className="h-12 w-32 rounded-full bg-slate-300 dark:bg-slate-700" />
          <div className="h-12 w-32 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;