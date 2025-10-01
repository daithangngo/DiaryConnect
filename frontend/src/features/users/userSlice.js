import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

// Fix: Rename fetchAllUsers to fetchUsers for consistency
export const fetchUsers = createAsyncThunk("users/fetchAll", async () => {
  const res = await userApi.getAll();
  return res.data;
});

// Create users
export const createUser = createAsyncThunk("users/create", async (userData) => {
  const res = await userApi.create(userData);
  return res.data;
});

// Delete users
export const deleteUser = createAsyncThunk("users/delete", async (userId) => {
  await userApi.delete(userId);
  return userId;
});

const slice = createSlice({
  name: "users",
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter((user) => user.id !== action.payload);
      });
  }
});

export default slice.reducer;