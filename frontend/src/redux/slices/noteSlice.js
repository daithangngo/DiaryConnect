import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import noteApi from "../../api/noteApi";

// Fetch notes for a user
export const fetchNotes = createAsyncThunk("notes/fetchByUser", async (userId) => {
  const res = await noteApi.getAll(userId);
  return res.data;
});

// Create note
export const createNote = createAsyncThunk("notes/create", async ({ userId, noteData }) => {
  const res = await noteApi.create(userId, noteData);
  return res.data;
});

// Update note
export const updateNote = createAsyncThunk("notes/update", async ({ noteId, noteData }) => {
  const res = await noteApi.update(noteId, noteData);
  return res.data;
});

// Delete note
export const deleteNote = createAsyncThunk("notes/delete", async (noteId) => {
  await noteApi.delete(noteId);
  return noteId;
});

const slice = createSlice({
  name: "notes",
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchNotes.fulfilled, (state, action) => { state.loading = false; state.list = action.payload; })
      .addCase(fetchNotes.rejected, (state, action) => { state.loading = false; state.error = action.error.message; })
      .addCase(createNote.fulfilled, (state, action) => { state.list.push(action.payload); })
      .addCase(updateNote.fulfilled, (state, action) => {
        state.list = state.list.map(oldNote => oldNote.id === action.payload.id ? action.payload : oldNote);
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.list = state.list.filter(n => n.id !== action.payload);
      });
  }
});

export default slice.reducer;
