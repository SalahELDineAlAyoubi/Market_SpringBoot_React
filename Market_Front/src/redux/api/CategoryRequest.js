import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8081" });

export const getAllCategories = () => API.get("/categories");


 
export const getManagement = () => {
  const  result = API.get(`/thymeleaf/get-all`);
  console.log(result);
  return result;
};


// export const getManagement = (token) => {
//   return API.get(`/thymeleaf/get-all`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };