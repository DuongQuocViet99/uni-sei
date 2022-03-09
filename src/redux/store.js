import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducerIndex from "redux/index/reducer";
import renameProj from "redux/index/middlewares/rename";
import deleteProj from "redux/index/middlewares/delete";

const reducer = combineReducers({ reducerIndex });

export default configureStore({
  reducer,
  middleware: [
    renameProj,
    deleteProj
  ]
});