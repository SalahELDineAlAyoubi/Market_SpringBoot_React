import { combineReducers } from "redux";

 import authReducer from "./authReducer";
 import regionsReducer from "./regionsReducer";
 
 

export const reducers = combineReducers({
 
  authReducer ,
  regionsReducer
    
});
