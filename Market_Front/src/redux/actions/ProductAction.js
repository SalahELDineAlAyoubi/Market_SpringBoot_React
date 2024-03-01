
  import * as ProductsApi from "../api/ProductRequest";


export const getAllByCategory = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_PRODUCTS_START" });
  try {
    const { data } = await ProductsApi.getAllByCategory(id);
    console.log("Action products : ", data);

    dispatch({ type: "RETREIVING_PRODUCTS_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_PRODUCTS_FAIL" });
  }
};



export const getAllByCategoriesContains = (id, searchFilter) => async (dispatch) => {
  dispatch({ type: "RETREIVING_PRODUCTS_FILTERED_START" });
  try {
    const { data } = await ProductsApi.getAllByCategoriesContains(
      id,
      searchFilter
    );
    console.log("Action products FILTERED : ", data);

    dispatch({ type: "RETREIVING_PRODUCTS_FILTERED_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_PRODUCTS_FILTERED_FAIL" });
  }
};