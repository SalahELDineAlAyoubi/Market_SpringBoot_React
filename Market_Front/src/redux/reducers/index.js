import { combineReducers } from "redux";

 import authReducer from "./authReducer";
 import regionsReducer from "./regionsReducer";
  import productReducer from "./productReducer";
  import categoryReducer from "./categoryReducer";

 

export const reducers = combineReducers({
  authReducer,
  regionsReducer,
  productReducer,
  categoryReducer,
});
