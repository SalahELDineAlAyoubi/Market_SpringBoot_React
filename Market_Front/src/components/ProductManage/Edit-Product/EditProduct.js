import React from 'react'
import withProductForm from '../HOC/withProductForm';
import ProductForm from '../ProductForm';
import { useDispatch, useSelector } from 'react-redux';
 import { useLocation, useNavigate, useParams } from 'react-router-dom';

const EditProduct = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
      const  productId   = useParams();

  // const { uploading } = useSelector((state) => state.productReducer);
 console.log(productId);
  const onSubmit = (data) => {
    //dispatch(editProduct(data, categoryId.selectedCategoryId, token));
    //   console.log("Adding product:", data);
    //   console.log("Adding product:", );
    ///  if (!uploading) navigate("/");
  };

  const EnhancedProductForm = withProductForm(
    ProductForm,
    onSubmit,
    true,
    false
  );

  return (
    <EnhancedProductForm
      product={{
        id: 38,
        name: "Calbe",
        price: 0.9,
        quantity: 4,
        selectedCategoryId: 2,
      }}
    />
  );
};

export default EditProduct;
