import { createSlice } from "@reduxjs/toolkit";

export const AnalyticsSlice = createSlice({
  name: "analytics",
  initialState: {
    accuracy: 0,
    errors: 0,
    speed: 0,
  },
  reducers: {
    changeAccuracy: (state, action) => {
      state.accuracy = action.payload;
    },
    incrementError: (state) => {
      state.errors++;
    },
    decrementError: (state) => {
      state.errors--;
    },
    changeSpeed: (state, action) => {
      state.speed = action.payload;
    },
  },
});

export const { changeAccuracy, incrementError, decrementError, changeSpeed } =
  AnalyticsSlice.actions;
export default AnalyticsSlice.reducer;
