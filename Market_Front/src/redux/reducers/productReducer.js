const productReducer = (
  state = {
    products: [],
    //product: {},
     loading: false,
    error: false,
   },
  action
) => {
  switch (action.type) {
    case "RETREIVING_PRODUCTS_START":
      return { ...state, loading: true, error: false };
    case "RETREIVING_PRODUCTS_SUCCESS":
      return { ...state, products: action.data, loading: false, error: false };
    case "RETREIVING_PRODUCTS_FAIL":
      return { ...state, loading: false, error: true };

    case "RETREIVING_PRODUCTS_FILTERED_START":
      return { ...state, loading: true, error: false };
    case "RETREIVING_PRODUCTS_FILTERED_SUCCESS":
      return { ...state, products: action.data, loading: false, error: false };
    case "RETREIVING_PRODUCTS_FILTERED_FAIL":
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default productReducer;
