import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8081" });

export const getAllByCategory = (id) => API.get(`/products/get-all/${id}`); ;
 