import { combineReducers } from "redux";

import auth from "./auth.reducer.js";
import error from './error.reducer.js';

const appReducer = combineReducers({
  auth,
  error
});

export default appReducer;
