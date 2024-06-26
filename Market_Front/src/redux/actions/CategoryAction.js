import * as CategoriesApi from "../api/CategoryRequest";

export const getAllCategories = () => async (dispatch) => {
  dispatch({ type: "RETREIVING_CATEGORIES_START" });
  try {
    const { data } = await CategoriesApi.getAllCategories();
    console.log("Action Categories  : ", data);

    dispatch({ type: "RETREIVING_CATEGORIES_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_CATEGORIES_FAIL" });
  }
};
