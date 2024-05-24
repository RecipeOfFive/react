import { combineReducers, createStore } from "redux";
import searchElemReducer from "./reducers/searchElem";
import { configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    searchElem: searchElemReducer,
});
const store = configureStore({ reducer: rootReducer });
// console.log(store.getState());

export default store;