import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./Reducers";

const store = configureStore({
   reducer: allReducers,
});

export default store;
