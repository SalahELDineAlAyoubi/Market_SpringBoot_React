import React, { useEffect, useState } from 'react'
import "./ProductForm.css";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/actions/CategoryAction';
import { Link } from 'react-router-dom';


 const ProductForm = ({ onSubmit, product, loading, isAdd }) => {

   const [name, setName] = useState(product ? product.name : "");
   const [price, setPrice] = useState(product ? product.price : "");
   const [quantity, setQuantity] = useState(product ? product.quantity : "");
   const [image, setImage] = useState(product ? product.image : "");
 
   const { categories, loadingCat } = useSelector(
     (state) => state.categoryReducer
   );

   const [selectedCategoryId, setSelectedCategoryId] = useState(
     product ? product.selectedCategoryId : categories[0].id
   );
   const [nameCategory, setNameCategory] = useState(
     categories[0].id 
   );
   const [error, setError] = useState(null);

   const handleSubmit = (e) => {
     e.preventDefault();
     if (
       name !== "" &&
       price !== "" &&
       quantity !== "" &&
       selectedCategoryId !== ""
     )
       onSubmit({ name, price, quantity, image }, { selectedCategoryId });
     else setError("All Field Required");
   };

   return (
     <div className=" productFormBody">
       <form className="container p-5" id="formCont" onSubmit={handleSubmit}>
         <h2 className="mb-4">{isAdd ? "Add New " : "Update "}product</h2>

         <input
           type="text"
           className="form-control mb-4"
           placeholder="Name"
           value={name}
           onChange={(e) => setName(e.target.value)}
         />
         <input
           type="text"
           className="form-control mb-4"
           placeholder="Price "
           value={price}
           onChange={(e) => setPrice(e.target.value)}
         />

         <input
           type="text"
           className="form-control mb-4"
           placeholder="Quantity"
           value={quantity}
           onChange={(e) => setQuantity(e.target.value)}
         />

         <div className="row">
           <div className="col-md-6">
             <div className="input-group  mb-4">
               <label className="input-group-text">Select Image</label>
               <input
                 type="file"
                 className="form-control"
                 onChange={(e) => setImage(e.target.files[0])}
               />
             </div>
           </div>

           <div className="col-md-6">
             <div className="btn-group " style={{ width: "100%" }}>
               <button
                 type="button"
                 className="btn btn-warning mb-3  ml-lg-5 dropdown-toggle text-secondary bg-light border-0"
                 data-toggle="dropdown"
                 aria-haspopup="true"
                 aria-expanded="false"
                 style={{ width: "100%", height: "42px" }}
               >
                 <span className="mt-3 mr-3"> Category :</span>

                 {nameCategory}
               </button>

               <div className="dropdown-menu ">
                 {categories.map((item) => (
                   <div
                     key={item.id}
                     className={`dropdown-item dropItem ${
                       item.id === selectedCategoryId ? "active" : ""
                     }`}
                     onClick={() => {
                       setSelectedCategoryId(item.id);
                       setNameCategory(item.name);
                       console.log(selectedCategoryId);
                       console.log(nameCategory);
                     }}
                   >
                     {item.name}
                   </div>
                 ))}
               </div>
             </div>
           </div>
         </div>

         <button type="submit" className="btn  btnOrange ">
           {isAdd
             ? loading
               ? "Uploading.."
               : "Add"
             : loading
             ? "Updating.."
             : "Update"}
         </button>
         <br></br>
         {error && <p style={{ color: "red" }}>{error}</p>}
       </form>
     </div>
   );
 };

export default ProductForm
