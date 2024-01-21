import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./AuthSlice.js";
import userSliceReducer from "./userSlice.js";

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        user: userSliceReducer
    }
});

export default store;
