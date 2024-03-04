import React, { useEffect } from 'react'
import withProductForm from '../HOC/withProductForm';
import ProductForm from '../ProductForm';
import { useDispatch, useSelector } from 'react-redux';
 import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { editProduct, getProductById } from '../../../redux/actions/ProductAction';

const EditProduct = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
      const product = useSelector((state) => state.productReducer.product);
      const { updating } = useSelector((state) => state.productReducer.product);

     useEffect(() => {
     dispatch(getProductById(params.productId));
   //  debugger;

      }, []);
  // const { uploading } = useSelector((state) => state.productReducer);
  const onSubmit = (data, categoryId) => {
    console.log("Adding product:", data);
    console.log("Adding product:", categoryId.selectedCategoryId);

    dispatch(
      editProduct(data, categoryId.selectedCategoryId, params.productId)
    );
    console.log("Adding product:", data);
        navigate("/"); 

    //   console.log("Adding product:", );
    ///  if (!uploading) navigate("/");
  };

  const EnhancedProductForm = withProductForm(
    ProductForm,
    onSubmit,
    updating,
    false
  );

  return <EnhancedProductForm product={product} />;
};

export default EditProduct;
