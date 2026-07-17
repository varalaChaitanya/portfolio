import api from "./api";

export const getGitHubProfile = async () => {
  const response = await api.get("/github");

  return response.data;
};