import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/authSlice.js";
import userSliceReducer from "./Slices/userSlice.js";

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        user: userSliceReducer
    }
});

export default store;
