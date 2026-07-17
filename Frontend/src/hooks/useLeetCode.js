import { useEffect, useState } from "react";

import { getLeetCodeProfile } from "../services/leetcodeService";

const useLeetCode = () => {
  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const fetchProfile = async () => {
    try {
      setLoading(true);

      const response =
        await getLeetCodeProfile();

      setProfile(response.data);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to fetch LeetCode profile."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return {
    profile,
    loading,
    error,
  };
};

export default useLeetCode;