import { Element } from "react-scroll";

import SectionTitle from "../Common/SectionTitle";

import useGitHub from "../../hooks/useGitHub";

import GitHubCard from "./GitHubCard";
import GitHubSkeleton from "./GitHubSkeleton";

const GitHub = () => {
  const {
    profile,
    loading,
    error,
  } = useGitHub();

  return (
    <Element name="github">
      <section
        className="
          mx-auto

          max-w-7xl

          px-6

          py-28
        "
      >
        <SectionTitle
          title="GitHub Profile"
          subtitle="A glimpse into my development journey, repositories, and continuous learning through real-world projects."
        />

        {loading && <GitHubSkeleton />}

        {!loading && error && (
          <h2
            className="
              text-center

              text-xl

              font-semibold

              text-red-500
            "
          >
            {error}
          </h2>
        )}

        {!loading &&
          !error &&
          profile && (
            <GitHubCard
              profile={profile}
            />
          )}
      </section>
    </Element>
  );
};

export default GitHub;