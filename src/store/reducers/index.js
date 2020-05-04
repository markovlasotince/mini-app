import { combineReducers } from "redux";

// import your reducer files here
import utils from "./utils";
import auth from "./auth";
import posts from "./posts";

export default combineReducers({
  // enter the imported reducer's name here
  utils,
  auth,
  posts,
});
