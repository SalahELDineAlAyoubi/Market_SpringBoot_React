const productReducer = (
  state = {
    products: [],
    product: {},
    uploadedProd: {},
    loading: false,
    uploading: false,
    updating: false,
    deleting: false,
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
        product: action.data,
        uploading: false,
        error: false,
      };
    case "ADD_PRODUCT_FAIL":
      return { ...state, uploading: false, error: true };

    case "GET_PRODUCT_START":
      return { ...state, loading: true, error: false };
    case "GET_PRODUCT_SUCCESS":
      return {
        ...state,
        product: action.data,
        loading: false,
        error: false,
      };
    case "GET_PRODUCT_FAIL":
      return { ...state, loading: false, error: true };

    case "UPDATE_PRODUCT_START":
      return { ...state, updating: true, error: false };
    case "UPDATE_PRODUCT_SUCCESS":
      return {
        ...state,
        //  product: action.data,
        updating: false,
        error: false,
      };
    case "UPDATE_PRODUCT_FAIL":
      return { ...state, updating: false, error: true };

    case "DELETE_PRODUCT_START":
      return { ...state, deleting: true, error: false };
    case "DELETE_PRODUCT_SUCCESS":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.data
        ),
        deleting: false,
        error: false,
      };
    case "DELETE_PRODUCT_FAIL":
      return { ...state, deleting: false, error: true };

    default:
      return state;
  }
};

export default productReducer;
