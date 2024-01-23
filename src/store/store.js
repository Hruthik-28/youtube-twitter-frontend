import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/authSlice.js";
import userSliceReducer from "./Slices/userSlice.js";
import videoSliceReducer from "./Slices/videoSlice.js";
import subscriptionSlice from "./Slices/subscriptionSlice.js";
import likeSlice from "./Slices/likeSlice.js";
import tweetSlice from "./Slices/tweetSlice.js";
import commentSlice from "./Slices/commentSlice.js";

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        user: userSliceReducer,
        video: videoSliceReducer,
        subscription: subscriptionSlice,
        like: likeSlice,
        tweet: tweetSlice,
        comment: commentSlice,
    }
});

export default store;
