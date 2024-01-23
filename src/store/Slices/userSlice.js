import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    loading: false,
    profileData: null,
    history: [],
};

export const userChannelProfile = createAsyncThunk(
    "getUserChannelProfile",
    async (username) => {
        try {
            const response = await axiosInstance.get(`/users/c/${username}`);
            console.log(response);
            return response.data.data;
        } catch (error) {
            toast.error(error?.response?.data?.error);
            throw error;
        }
    }
);

export const getWatchHistory = createAsyncThunk("getWatchHistory", async () => {
    try {
        const response = await axiosInstance.get("/users/watch-history");
        // console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.error);
        throw error;
    }
});

export const updateUserDetails = createAsyncThunk(
    "updateUserDetails",
    async (data) => {
        try {
            const response = await axiosInstance("/users/update-user", data);
            toast.success("Updated details successfully!!!");
            return response.data.data;
        } catch (error) {
            toast.error(error?.response?.data?.error);
            throw error;
        }
    }
);

export const updateAvatar = createAsyncThunk("updateAvatar", async (avatar) => {
    try {
        const response = await axiosInstance("/users/update-avatar", avatar);
        toast.success("Updated details successfully!!!");
        return response.data.data;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
});

export const updateCoverImg = createAsyncThunk(
    "updateCoverImg",
    async (coverImage) => {
        try {
            const response = await axiosInstance(
                "/users/update-coverImg",
                coverImage
            );
            toast.success("Updated details successfully!!!");
            return response.data.data;
        } catch (error) {
            toast.error(error?.response?.data?.error);
            throw error;
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userChannelProfile.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(userChannelProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.profileData = action.payload;
        });
        builder.addCase(getWatchHistory.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getWatchHistory.fulfilled, (state, action) => {
            state.loading = false;
            state.history = action.payload;
        });
        builder.addCase(updateUserDetails.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateUserDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.profileData = action.payload;
        });
        builder.addCase(updateAvatar.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateAvatar.fulfilled, (state, action) => {
            state.loading = false;
            state.profileData = action.payload;
        });
        builder.addCase(updateCoverImg.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateCoverImg.fulfilled, (state, action) => {
            state.loading = false;
            state.profileData = action.payload;
        });
    },
});

export default userSlice.reducer;
