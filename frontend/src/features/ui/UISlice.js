import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false,
};

const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export default UISlice.reducer;
export const { changeTheme } = UISlice.actions;
