import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../network/api";
import { UsersModel } from "../../models/dataModels";


interface UserState {
  user: UsersModel[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: [],
  loading: false,
  error: null,
};

export const getUsersState = createAsyncThunk("users/getUser", async () => {
  const response = await api.getUsers();
  return response;
});

export const getUserByIdState = createAsyncThunk(
  "users/getUserById",
  async (id: string) => {
    const response = await api.getUserById(id);
    return response;
  }
);

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersState.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUsersState.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    });
    builder.addCase(getUsersState.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
    builder.addCase(getUserByIdState.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUserByIdState.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    });
    builder.addCase(getUserByIdState.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export const userReducer = UserSlice.reducer;