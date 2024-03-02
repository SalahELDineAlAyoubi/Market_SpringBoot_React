 
const regionsReducer = (
  state = {
    regions: [],
    region: {},
    regionsUsers: [],
    updateLoading: false,
    loading: false,
    error: false,
    uploading: false,
  },
  action
) => {
  switch (action.type) {
    case "RETREIVING_REGIONS_START":
      return { ...state, loading: true, error: false };
    case "RETREIVING_REGIONS_SUCCESS":
      return { ...state, regions: action.data, loading: false, error: false };
    case "RETREIVING_REGIONS_FAIL":
      return { ...state, loading: false, error: true };

    case "RETREIVING_REGIONS_USERS_START":
      return { ...state, uploading: true, error: false };
    case "RETREIVING_REGIONS_USERS_SUCCESS":
      return { ...state, regionsUsers: action.data, uploading: false, error: false };
    case "RETREIVING_REGIONS_USERS_FAIL":
      return { ...state, uploading: false, error: true };

    default:
      return state;
  }
};

export default regionsReducer
