import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducerForindex from "redux/index/Reducer";

const reducer = combineReducers({ reducerForindex });

export default configureStore({
  reducer,
  middleware: []
});