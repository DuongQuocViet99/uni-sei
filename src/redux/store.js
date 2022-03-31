import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducerIndex from "redux/index/reducer";
import middRenProj from "redux/index/middlewares/ren";
import middDelProj from "redux/index/middlewares/del";

const reducer = combineReducers({ reducerIndex });

export default configureStore({
  reducer,
  middleware: [
    middRenProj,
    middDelProj
  ]
});