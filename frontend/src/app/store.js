import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import noteReducer from "../features/notes/noteSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    notes: noteReducer,
  },
});
