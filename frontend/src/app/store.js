import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import programmersReducer from "../features/programmers/programmersSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    programmers: programmersReducer,
  },
});
