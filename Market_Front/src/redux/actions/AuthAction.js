import * as AuthApi from "../api/AuthRequest";

export const logIn = (formData) => async (dispatch) => {
   dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
   console.log("Action Auth :" + data)
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    const errorMessage = error.response.data;
 
    dispatch({ type: "AUTH_FAIL", payload: errorMessage });
  }
};

export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data  });

    console.log("after");
        dispatch(
          logIn({ username: formData.username, password: formData.password })
        );

  } catch (error) {
  const errorMessage = error.response.data.message;  
    dispatch({ type: "AUTH_FAIL", payload: errorMessage });
  
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
