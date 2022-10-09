import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import programmerService from "./programmerService";

const initialState = {
  programmers: [],
  status: "idle",
  error: null,
};

// ? fetch list of programmers from endpoint

export const fetchProgrammers = createAsyncThunk(
  "programmer/fetched",
  async (thunkAPI) => {
    try {
      return await programmerService.fetch_programmers();
    } catch (error) {
      const response =
        (error.response &&
          error.response.message &&
          error.response.message.data) ||
        error.response ||
        error.toString();
      return thunkAPI.rejectWithValue(response);
    }
  }
);

// * add new skills
export const addSkill = createAsyncThunk(
  "programmers/skills/added",
  async (data, thunkAPI) => {
    try {
      return await programmerService.addSkill(data);
    } catch (error) {
      const response =
        (error.response &&
          error.response.message &&
          error.response.message.data) ||
        error.response ||
        error.toString();
      return thunkAPI.rejectWithValue(response);
    }
  }
);

const programmerSlice = createSlice({
  name: "programmers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProgrammers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProgrammers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.programmers = action.payload;
      })
      .addCase(fetchProgrammers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addSkill.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addSkill.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.programmer.skills = [...action.payload];
      })
      .addCase(addSkill.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default programmerSlice.reducer;
