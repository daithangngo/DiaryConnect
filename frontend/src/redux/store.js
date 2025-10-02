import { configureStore } from "@reduxjs/toolkit";
//import userReducer from "../features/users/userSlice";
//import noteReducer from "../features/notes/noteSlice";
import userReducer from "./slices/userSlice.js";
import noteReducer from "./slices/noteSlice.js";


export const store = configureStore({
  reducer: {
    users: userReducer,
    notes: noteReducer,
  },
});
