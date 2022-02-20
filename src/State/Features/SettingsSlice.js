import { createSlice } from "@reduxjs/toolkit";

export const SettingsSlice = createSlice({
  name: "settings",
  initialState: {
    IsTestMode: true,
    Difficulty: "Easy",
  },
  reducers: {
    changeMode: (state, action) => {
      if (action.payload === "Test") {
        state.IsTestMode = true;
        state.IsPracticeMode = false;
      } else if (action.payload === "Practice") {
        state.IsTestMode = false;
        state.IsPracticeMode = true;
      }
    },
    changeDifficulty: (state, action) => {
      state.Difficulty = action.payload;
    },
  },
});

export const { changeMode, changeDifficulty } =
  SettingsSlice.actions;
export default SettingsSlice.reducer;
