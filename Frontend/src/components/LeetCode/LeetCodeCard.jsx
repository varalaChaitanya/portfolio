import { motion } from "framer-motion";

import { ExternalLink } from "lucide-react";

import LeetCodeStat from "./LeetCodeStat";
import LeetCodeRecent from "./LeetCodeRecent";

const LeetCodeCard = ({ profile }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        relative
        mx-auto
        max-w-3xl

        overflow-hidden

        rounded-[32px]

        border
        border-slate-200

        bg-white/80
        dark:bg-slate-900/80

        shadow-2xl

        backdrop-blur-xl

        dark:border-slate-700
      "
    >
      {/* Gradient Header */}

      <div
        className="
          h-40

          bg-gradient-to-r
          from-yellow-400
          via-orange-500
          to-yellow-500
        "
      />

      {/* Main Content */}

      <div
        className="
          -mt-16

          flex
          flex-col
          items-center

          px-8
          pb-10
        "
      >
        {/* Avatar */}

        <img
          src={profile.avatar}
          alt={profile.username}
          className="
            h-32
            w-32

            rounded-full

            border-4
            border-white

            object-cover

            shadow-xl
          "
        />

        {/* Username */}

        <h2
          className="
            mt-6

            text-3xl

            font-black

            text-slate-900
            dark:text-white
          "
        >
          {profile.username}
        </h2>

        <p
          className="
            mt-2

            text-center

            text-slate-500
            dark:text-slate-400
          "
        >
          Keep solving one problem every day 🚀
        </p>

        {/* Problems Solved */}

        <div className="mt-10 text-center">
          <h3
            className="
              text-6xl

              font-black

              text-yellow-500
            "
          >
            {profile.solved.all}
          </h3>

          <p
            className="
              mt-2

              text-lg

              font-semibold

              text-slate-500
              dark:text-slate-400
            "
          >
            Problems Solved
          </p>
        </div>

        {/* Stats */}

        <div
          className="
            mt-12

            grid
            w-full

            grid-cols-2

            gap-5

            md:grid-cols-4
          "
        >
          <LeetCodeStat
            title="Easy"
            value={profile.solved.easy}
            color="#16a34a"
          />

          <LeetCodeStat
            title="Medium"
            value={profile.solved.medium}
            color="#ea580c"
          />

          <LeetCodeStat
            title="Hard"
            value={profile.solved.hard}
            color="#dc2626"
          />

          <LeetCodeStat
            title="Stars"
            value={profile.starRating}
            color="#ca8a04"
          />
        </div>

        {/* Rank */}

        <div
          className="
            mt-10

            w-full

            rounded-2xl

            bg-slate-100
            dark:bg-slate-800

            p-6

            text-center
          "
        >
          <p
            className="
              text-sm

              font-semibold

              uppercase

              tracking-widest

              text-slate-500
            "
          >
            Global Ranking
          </p>

          <h3
            className="
              mt-3

              text-3xl

              font-black

              text-blue-600
            "
          >
            #{profile.ranking}
          </h3>
        </div>

        {/* Recent Accepted */}

        <LeetCodeRecent
          submissions={profile.recentAccepted}
        />

        {/* View Profile */}

        <motion.a
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          href={profile.profileUrl}
          target="_blank"
          rel="noreferrer"
          className="
            mt-10

            flex

            items-center

            gap-3

            rounded-full

            bg-yellow-500

            px-8
            py-4

            font-semibold

            text-white

            shadow-lg

            transition

            hover:bg-yellow-600
          "
        >
          <ExternalLink size={20} />

          View LeetCode Profile
        </motion.a>
      </div>
    </motion.div>
  );
};

export default LeetCodeCard;