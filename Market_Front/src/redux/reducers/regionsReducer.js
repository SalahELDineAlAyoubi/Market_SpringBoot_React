 
const regionsReducer = (
  state = {
    regions: [],
    region: {},
    updateLoading: false,
    loading: false,
    error: false,
    uploading: false,
  },
  action
) => { switch (action.type) {
  case "RETREIVING_REGIONS_START":
    return { ...state, loading: true, error: false };
  case "RETREIVING_REGIONS_SUCCESS":
    return { ...state, regions: action.data, loading: false, error: false };
  case "RETREIVING_REGIONS_FAIL":
    return { ...state, loading: false, error: true };

  default:
    return state;
}};

export default regionsReducer
