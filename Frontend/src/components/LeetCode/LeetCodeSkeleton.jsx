const LeetCodeSkeleton = () => {
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

        bg-white

        shadow-xl

        dark:border-slate-700

        dark:bg-slate-900
      "
    >
      {/* Header */}

      <div className="h-40 bg-slate-300 dark:bg-slate-700" />

      <div className="px-8 pb-10">
        {/* Avatar */}

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

        {/* Username */}

        <div
          className="
            mx-auto
            mt-6

            h-8
            w-48

            rounded

            bg-slate-300

            dark:bg-slate-700
          "
        />

        {/* Subtitle */}

        <div
          className="
            mx-auto
            mt-4

            h-5
            w-72

            rounded

            bg-slate-300

            dark:bg-slate-700
          "
        />

        {/* Solved */}

        <div
          className="
            mx-auto
            mt-10

            h-16
            w-28

            rounded

            bg-slate-300

            dark:bg-slate-700
          "
        />

        {/* Stats */}

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

        {/* Rank */}

        <div
          className="
            mt-10

            h-24

            rounded-2xl

            bg-slate-300

            dark:bg-slate-700
          "
        />

        {/* Recent */}

        <div className="mt-10 space-y-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="
                h-14

                rounded-xl

                bg-slate-300

                dark:bg-slate-700
              "
            />
          ))}
        </div>

        {/* Button */}

        <div
          className="
            mx-auto
            mt-10

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

export default LeetCodeSkeleton;