import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8081" });

export const getAllByCategory = (id) => API.get(`/products/get-all/${id}`); ;
 
export const getAllByCategoriesContains = (id, searchFilter) =>
  API.get(`/products/get-all/${id}/${searchFilter}`); ;
 
export const getProductById = (id) =>
  API.get(`/products/${id}`); ;

export const editProduct = (productData,categoryId, productId) =>{

   const formData = new FormData();
   formData.append("image", productData.image);
   formData.append("name", productData.name);
   formData.append("price", productData.price);
   formData.append("quantity", productData.quantity);
  return API.put(`/products/${categoryId}/${productId}`,formData,{
    headers: {
   
      "Content-Type": "multipart/form-data",
    },
  });
}
export const addProduct = (productData, categoryId) => {
      

  const formData = new FormData();
  formData.append("image", productData.image);
  formData.append("name", productData.name);
  formData.append("price", productData.price);
  formData.append("quantity", productData.quantity);

  return API.post(`/products/add/${categoryId}`, formData, {
    headers: {
   
      "Content-Type": "multipart/form-data",
     // Authorization: `Bearer ${token}`,
    },
  });
};


export const deleteProduct = (id) =>
  API.delete(`/products/${id}`); ;
