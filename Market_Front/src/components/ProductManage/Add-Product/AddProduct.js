import React from 'react'
import "./AddProduct.css";
import withProductForm from '../HOC/withProductForm';
import ProductForm from '../ProductForm';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../redux/actions/ProductAction';
import { useNavigate } from 'react-router-dom';
const AddProduct = ({token}) => {
       const dispatch = useDispatch();
  const navigate = useNavigate();
     const { uploading } = useSelector((state) => state.productReducer);

  const onSubmit = (data,categoryId) => {
  dispatch(addProduct(data, categoryId.selectedCategoryId, token));
 //   console.log("Adding product:", data);
 //   console.log("Adding product:", );
    navigate("/"); 
  };

const EnhancedProductForm = withProductForm(ProductForm, onSubmit, uploading,true);

return <EnhancedProductForm />;

 };

export default AddProduct
