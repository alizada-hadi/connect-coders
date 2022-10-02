import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import programmersService from "./programmersService";

export const fetch_profile = createAsyncThunk(
  "coders/profile",
  async (token, thunkAPI) => {
    try {
      return await programmersService.get_programmer_profile(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const update_profile = createAsyncThunk(
  "coders/profile/updated",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      return await programmersService.programmer_profile(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  programmer: "",
  programmers: [],
  status: "idle",
  error: null,
};

const programmersSlice = createSlice({
  name: "coders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetch_profile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetch_profile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.programmer = action.payload;
      })
      .addCase(fetch_profile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(update_profile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(update_profile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.programmer = action.payload;
      })
      .addCase(update_profile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default programmersSlice.reducer;
