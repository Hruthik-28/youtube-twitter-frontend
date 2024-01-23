import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";
import { BASE_URL } from "../../constants";

const initialState = {
    loading: false,
    isPublished: null,
    video: null
};

export const getAllVideos = createAsyncThunk(
    "getAllVideos",
    async (userId, sortBy, sortType, query, page, limit) => {
        try {
            const url = new URL(`${BASE_URL}/video`);

            if (userId) url.searchParams.set("userId", userId);
            if (query) url.searchParams.set("query", query);
            if (page) url.searchParams.set("page", page);
            if (limit) url.searchParams.set("limit", limit);
            if (sortBy && sortType) {
                url.searchParams.set("sortBy", sortBy);
                url.searchParams.set("sortType", sortType);
            }

            const response = await axiosInstance.get(url);

            // console.log(response.data.data.docs);
            return response.data.data;
        } catch (error) {
            toast.error(error?.response?.data?.error);
            throw error;
        }
    }
);

export const publishAvideo = createAsyncThunk("publishAvideo", async(data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("videoFile", data.videoFile);
    formData.append("thumbnail", data.thumbnail[0]);

    try {
        const response = await axiosInstance.post('/video', formData);
        console.log(response.data.data);
        toast.success(response?.data?.message);
        return response.data.data;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
});

export const updateAVideo = createAsyncThunk("updateAVideo", async(data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("thumbnail", data.thumbnail[0]);

    try {
        const response = await axiosInstance.patch(`/video/v/${data.videoId}`, formData);
        console.log(response.data.data);
        toast.success(response?.data?.message);
        return response.data.data;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
});

export const deleteAVideo = createAsyncThunk("deleteAVideo", async(videoId) => {
    try {
        const response = await axiosInstance.delete(`/video/v/${videoId}`);
        console.log(response.data.data);
        toast.success(response?.data?.message);
        return response.data.data;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
});

export const getVideoById = createAsyncThunk("getVideoById", async(videoId) => {
    try {
        const response = await axiosInstance.get(`/video/v/${videoId}`);
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
});

export const togglePublishStatus = createAsyncThunk("togglePublishStatus", async(videoId) => {
    try {
        const response = await axiosInstance.get(`/video/toggle/publish/${videoId}`);
        console.log(response.data.data.isPublished);
        toast.success(response.data.data.message);
        return response.data.data.isPublished;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
});

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllVideos.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.videos = action.payload;
        });
        builder.addCase(publishAvideo.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(publishAvideo.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(updateAVideo.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateAVideo.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(deleteAVideo.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteAVideo.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(getVideoById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getVideoById.fulfilled, (state, action) => {
            state.loading = false;
            state.video = action.payload;
        });
        builder.addCase(togglePublishStatus.fulfilled, (state, action) => {
            state.isPublished = action.payload;
        });
    },
});

export default videoSlice.reducer;
