import { Element } from "react-scroll";

import SectionTitle from "../Common/SectionTitle";

import useLeetCode from "../../hooks/useLeetCode";

import LeetCodeCard from "./LeetCodeCard";
import LeetCodeSkeleton from "./LeetCodeSkeleton";

const LeetCode = () => {
  const {
    profile,
    loading,
    error,
  } = useLeetCode();

  return (
    <Element name="leetcode">
      <section
        className="
          mx-auto

          max-w-7xl

          px-6

          py-28
        "
      >
        <SectionTitle
          title="LeetCode Journey"
          subtitle="A snapshot of my problem-solving journey. Every accepted solution strengthens my understanding of algorithms and data structures."
        />

        {loading && <LeetCodeSkeleton />}

        {!loading && error && (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-red-500">
              {error}
            </h2>
          </div>
        )}

        {!loading &&
          !error &&
          profile && (
            <LeetCodeCard profile={profile} />
          )}
      </section>
    </Element>
  );
};

export default LeetCode;