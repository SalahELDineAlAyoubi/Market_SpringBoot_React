
  import * as ProductsApi from "../api/ProductRequest";


export const getAllByCategory = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await ProductsApi.getAllByCategory(id);
    console.log("Action products : ", data);

    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};
