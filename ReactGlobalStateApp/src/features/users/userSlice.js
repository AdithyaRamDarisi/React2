import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUsers } from "../../services/api";

// Async API Request

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",

    async (_, { rejectWithValue }) => {

        try {

            const data = await getUsers();

            return data;

        } catch (error) {

            return rejectWithValue(
                error.response?.data?.message || error.message
            );

        }

    }
);

// Initial State

const initialState = {
    users: [],
    loading: false,
    error: null,
    status: "idle"
};

// Create Slice

const userSlice = createSlice({

    name: "users",

    initialState,

    reducers: {},

    extraReducers: (builder) => {

        builder

            .addCase(fetchUsers.pending, (state) => {

                state.loading = true;
                state.error = null;
                state.status = "loading";

            })

            .addCase(fetchUsers.fulfilled, (state, action) => {

                state.loading = false;
                state.users = action.payload;
                state.status = "succeeded";

            })

            .addCase(fetchUsers.rejected, (state, action) => {

                state.loading = false;
                state.error = action.payload || action.error.message;
                state.status = "failed";

            });

    }

});

export default userSlice.reducer;