import { useEffect, useState } from "react";

import { getProjects } from "../services/projectService";

const useProjects = () => {
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const response = await getProjects();

      setProjects(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    projects,
    loading,
    error,
    refreshProjects: fetchProjects,
  };
};

export default useProjects;