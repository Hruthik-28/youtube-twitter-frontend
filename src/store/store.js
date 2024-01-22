import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/authSlice.js";
import userSliceReducer from "./Slices/userSlice.js";
import videoSliceReducer from "./Slices/videoSlice.js";

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        user: userSliceReducer,
        video: videoSliceReducer
    }
});

export default store;
