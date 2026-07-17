import api from "./api";

export const getLeetCodeProfile = async () => {
  const response = await api.get("/leetcode");

  return response.data;
};