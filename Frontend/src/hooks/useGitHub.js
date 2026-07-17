import { useEffect, useState } from "react";

import { getGitHubProfile } from "../services/githubService";

const useGitHub = () => {
  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const fetchProfile = async () => {
    try {
      setLoading(true);

      const response =
        await getGitHubProfile();

      setProfile(response.data);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to fetch GitHub profile."
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

export default useGitHub;