import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    loading: false,
    status: false,
    userData: null,
};

export const createAccount = createAsyncThunk("register", async (data) => {
    const formData = new FormData();
    formData.append("avatar", data.avatar[0]);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("fullName", data.fullName);

    

    try {
        const response = await axiosInstance.post("/users/register", formData);
        console.log(response.data);
        toast.success("Registered successfully!!!");
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
});

export const userLogin = createAsyncThunk("login", async (data) => {
    try {
        const response = await axiosInstance.post("/users/login", data);
        console.log(response.data);
        return response.data.data.user;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
});

export const userLogout = createAsyncThunk("logout", async () => {
    try {
        const response = await axiosInstance.post("/users/logout");
        // console.log(response.data);
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
});

export const refreshAccessToken = createAsyncThunk(
    "refreshAccessToken",
    async (data) => {
        try {
            const response = await axiosInstance.post(
                "/users/refresh-token",
                data
            );
            // console.log(response.data);
            return response.data;
        } catch (error) {
            toast.error(error?.response?.data?.error);
            throw error;
        }
    }
);

export const changePassword = createAsyncThunk(
    "changePassword",
    async (data) => {
        try {
            const response = await axiosInstance.post(
                "/users/change-password",
                data
            );
            // console.log(response.data);
            toast.success(response.data.data);
            return response.data;
        } catch (error) {
            toast.error(error?.response?.data?.error);
            throw error;
        }
    }
);

export const getCurrentUser = createAsyncThunk("getCurrentUser", async () => {
    const response = await axiosInstance.get("/users/current-user");
    // console.log(response.data);
    return response.data.data;
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createAccount.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createAccount.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.status = true;
            state.userData = action.payload;
        });
        builder.addCase(userLogout.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(userLogout.fulfilled, (state) => {
            state.loading = false;
            state.status = false;
            state.userData = null;
        });
        builder.addCase(getCurrentUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
            state.loading = false;
            state.status = true;
            state.userData = action.payload;
        });
        builder.addCase(getCurrentUser.rejected, (state) => {
            state.loading = false;
            state.status = false;
            state.userData = null;
        });
    },
});

// export const { updateUser } = authSlice.actions;

export default authSlice.reducer;
