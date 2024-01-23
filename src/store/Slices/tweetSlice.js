import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    loading: false,
    tweets: [],
};

export const createTweet = createAsyncThunk("createTweet", async (content) => {
    try {
        const response = await axiosInstance.post("/tweet", content);
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
});

export const editTweet = createAsyncThunk(
    "editTweet",
    async ({ tweetId, content }) => {
        try {
            const response = await axiosInstance.patch(
                `/tweet/${tweetId}`,
                content
            );
            console.log(response.data.data);
            return response.data.data;
        } catch (error) {
            toast.error(error?.response?.data?.error);
            throw error;
        }
    }
);

export const deleteTweet = createAsyncThunk("deleteTweet", async (tweetId) => {
    try {
        const response = await axiosInstance.delete(`/tweet/${tweetId}`);
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
});

export const getUserTweets = createAsyncThunk(
    "getUserTweets",
    async (userId) => {
        try {
            const response = await axiosInstance.get(`/tweet/user/${userId}`);
            console.log(response.data.data);
            return response.data.data;
        } catch (error) {
            toast.error(error?.response?.data?.error);
            throw error;
        }
    }
);

const tweetSlice = createSlice({
    name: "tweet",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            getUserTweets.pending,
            (state) => (state.loading = true)
        );
        builder.addCase(getUserTweets.fulfilled, (state, action) => {
            state.loading = false;
            state.tweets = action.payload;
        });
    },
});

export default tweetSlice.reducer;
