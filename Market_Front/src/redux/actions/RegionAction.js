  import * as RegionsApi from "../api/RegionRequest";


export const getAllRegions = () => async (dispatch) => {
  dispatch({ type: "RETREIVING_REGIONS_START" });
  try {
    const { data } = await RegionsApi.getAllRegions();
    console.log("Action regions : ", data);

    dispatch({ type: "RETREIVING_REGIONS_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_REGIONS_FAIL" });
  }
};

 
