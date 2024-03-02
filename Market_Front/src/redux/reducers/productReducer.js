const productReducer = (
  state = {
    products: [],
    //product: {},
    uploadedProd: {},
    loading: false,
    uploading: false,
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

    case "ADD_PRODUCT_START":
      return { ...state, uploading: true, error: false };
    case "ADD_PRODUCT_SUCCESS":
      return {
        ...state,
        uploadedProd: action.data,
        uploading: false,
        error: false,
      };
    case "ADD_PRODUCT_FAIL":
      return { ...state, uploading: false, error: true };

    default:
      return state;
  }
};

export default productReducer;
