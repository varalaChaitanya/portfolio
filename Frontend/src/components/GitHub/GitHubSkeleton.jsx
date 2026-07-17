const GitHubSkeleton = () => {
  return (
    <div
      className="
        mx-auto

        max-w-3xl

        animate-pulse

        overflow-hidden

        rounded-[32px]

        border

        border-slate-200
        dark:border-slate-700

        bg-white
        dark:bg-slate-900

        shadow-xl
      "
    >
      <div className="h-40 bg-slate-300 dark:bg-slate-700" />

      <div className="px-8 pb-10">
        <div
          className="
            -mt-16

            mx-auto

            h-32
            w-32

            rounded-full

            bg-slate-300
            dark:bg-slate-700
          "
        />

        <div
          className="
            mx-auto

            mt-6

            h-8

            w-60

            rounded

            bg-slate-300
            dark:bg-slate-700
          "
        />

        <div
          className="
            mx-auto

            mt-4

            h-5

            w-40

            rounded

            bg-slate-300
            dark:bg-slate-700
          "
        />

        <div
          className="
            mt-10

            grid

            grid-cols-2

            gap-5

            md:grid-cols-4
          "
        >
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="
                h-24

                rounded-2xl

                bg-slate-300
                dark:bg-slate-700
              "
            />
          ))}
        </div>

        <div
          className="
            mx-auto

            mt-12

            h-14

            w-64

            rounded-full

            bg-slate-300
            dark:bg-slate-700
          "
        />
      </div>
    </div>
  );
};

export default GitHubSkeleton;