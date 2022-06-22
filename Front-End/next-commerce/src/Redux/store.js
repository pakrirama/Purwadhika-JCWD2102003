import { combineReducers } from "redux";

import authReducer from "./Reducers/auth/auth";

const rootReducers = combineReducers({
  auth: authReducer,
});

export default rootReducers;
