import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducerForindex from "redux/index/Reducer";
import renamed from "redux/index/middlewares/Rename";
import deleted from "redux/index/middlewares/Delete";

const reducer = combineReducers({ reducerForindex });

export default configureStore({
  reducer,
  middleware: [
    renamed,
    deleted
  ]
});