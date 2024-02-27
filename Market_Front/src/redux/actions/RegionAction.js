  import * as RegionsApi from "../api/RegionRequest";


export const getAllRegions = () => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await RegionsApi.getAllRegions();
    console.log("Action  : ", data);

    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

 
