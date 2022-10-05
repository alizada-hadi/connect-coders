import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import UIReducer from "../features/ui/UISlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    UI: UIReducer,
  },
});
