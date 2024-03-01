import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllByCategoriesContains, getAllByCategory } from '../../../redux/actions/ProductAction';
import ProductCard from '../Card/ProductCard';

const AllCards = ({ categoryId, searchFilter }) => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.productReducer);
  useEffect(() => {
    //dispatch(getAllCategories());
    if (searchFilter==="") dispatch(getAllByCategory(categoryId));
   else  dispatch(getAllByCategoriesContains(categoryId, searchFilter));
  }, [categoryId, searchFilter]);

  return (
    <div>
      <div className="container-fluid ">
        <div className="row row-cols-1 row-cols-md-3 g-4  ">
          {products.map((item) => (
            <ProductCard key={item.id} loading={loading} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCards
