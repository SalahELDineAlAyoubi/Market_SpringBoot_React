const categoryReducer = (
  state = {
    categories: [],
    category: {},
    updateLoading: false,
    loadingCat: false,
  },
  action
) => {
  switch (action.type) {
    case "RETREIVING_START":
      return { ...state, loadingCat: true, error: false };
    case "RETREIVING_SUCCESS":
      return {
        ...state,
        categories: action.data,
        loadingCat: false,
        error: false,
      };
    case "RETREIVING_FAIL":
      return { ...state, loadingCat: false, error: true };

    default:
      return state;
  }
};

export default categoryReducer;
