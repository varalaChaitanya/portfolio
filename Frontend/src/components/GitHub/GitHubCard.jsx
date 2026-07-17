import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";

import GitHubStat from "./GitHubStat";

const GitHubCard = ({ profile }) => {
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
        dark:border-slate-700

        bg-white/80
        dark:bg-slate-900/80

        shadow-2xl

        backdrop-blur-xl
      "
    >
      {/* Header */}

      <div
        className="
          h-40

          bg-gradient-to-r

          from-slate-900

          via-slate-800

          to-black
        "
      />

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

        {/* Name */}

        <h2
          className="
            mt-6

            text-3xl

            font-black

            text-slate-900
            dark:text-white
          "
        >
          {profile.name || profile.username}
        </h2>

        {/* Username */}

        <p
          className="
            mt-2

            text-lg

            text-slate-500
            dark:text-slate-400
          "
        >
          @{profile.username}
        </p>

        {/* Bio */}

        {profile.bio && (
          <p
            className="
              mt-5

              max-w-xl

              text-center

              leading-7

              text-slate-600

              dark:text-slate-300
            "
          >
            {profile.bio}
          </p>
        )}

        {/* Company */}

        {profile.company && (
          <div
            className="
              mt-4

              flex

              items-center

              gap-2

              text-slate-500
            "
          >
            <FaBuilding size={18} />

            {profile.company}
          </div>
        )}

        {/* Location */}

        {profile.location && (
          <div
            className="
              mt-3

              flex

              items-center

              gap-2

              text-slate-500
            "
          >
            <FaMapMarkerAlt size={18} />

            {profile.location}
          </div>
        )}

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
          <GitHubStat
            title="Repositories"
            value={profile.publicRepos}
          />

          <GitHubStat
            title="Followers"
            value={profile.followers}
          />

          <GitHubStat
            title="Following"
            value={profile.following}
          />

          <GitHubStat
            title="Gists"
            value={profile.publicGists}
          />
        </div>

        {/* Button */}

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
            mt-12

            flex

            items-center

            gap-3

            rounded-full

            bg-slate-900
            dark:bg-white

            px-8

            py-4

            font-semibold

            text-white
            dark:text-slate-900

            shadow-lg
          "
        >
          <FaGithub size={20} />

          View GitHub

          <FaExternalLinkAlt size={16} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default GitHubCard;