import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8081" });

export const getAllRegions = () => API.get(`/regions`);

export const getAllRegionsIncludingUsers = (token) => {
  return API.get(`/regions/include`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};