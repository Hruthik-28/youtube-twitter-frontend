import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    loading: false,
    playlist: [],
    playlists: [],
};

export const createAPlaylist = createAsyncThunk(
    "createPlaylist",
    async ({ name, description }) => {
        try {
            const response = await axiosInstance.post("/playlist", {
                name,
                description,
            });
            if (response.data?.success) {
                toast.success(response.data.message);
            }
            return response.data.data;
        } catch (error) {
            toast.error(error?.response?.data?.error);
            throw error;
        }
    }
);

export const addVideoToPlaylist = createAsyncThunk(
    "addVideoToPlaylist",
    async (playlistId) => {
        try {
            const response = await axiosInstance.patch(
                `/playlist/add/${playlistId}`
            );
            if (response.data?.success) {
                toast.success(response.data.message);
            }
            return response.data?.data;
        } catch (error) {
            toast.error(error?.response?.data?.error);
            throw error;
        }
    }
);

export const removeVideoFromPlaylist = createAsyncThunk(
    "removeVideoFromPlaylist",
    async (playlistId) => {
        try {
            const response = await axiosInstance.patch(
                `/playlist/remove/${playlistId}`
            );
            if (response.data?.success) {
                toast.success(response.data.message);
            }
            return response.data.data;
        } catch (error) {
            toast.error(error?.response?.data?.error);
            throw error;
        }
    }
);

export const getPlaylistById = createAsyncThunk(
    "getPlaylistById",
    async (playlistId) => {
        try {
            const response = await axiosInstance.get(`/playlist/${playlistId}`);
            return response.data.data;
        } catch (error) {
            toast.error(error?.response?.data?.error);
            throw error;
        }
    }
);

export const getPlaylistsByUser = createAsyncThunk(
    "getPlaylistsByUser",
    async (userId) => {
        try {
            const response = await axiosInstance.get(
                `/playlist/user/${userId}`
            );
            return response.data.data;
        } catch (error) {
            toast.error(error?.response?.data?.error);
            throw error;
        }
    }
);

export const upadtePlaylist = createAsyncThunk(
    "upadtePlaylist",
    async ({ playlistId, name, description }) => {
        try {
            const response = await axiosInstance.patch(
                `/playlist/${playlistId}`,
                { name, description }
            );
            if (response.data.success) {
                toast.success(response.data.message);
            }
            return response.data.data;
        } catch (error) {
            toast.error(error?.response?.data?.error);
            throw error;
        }
    }
);

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPlaylistsByUser.fulfilled, (state, action) => {
            state.playlists = action.payload;
        });
    },
});

export default playlistSlice.reducer;
