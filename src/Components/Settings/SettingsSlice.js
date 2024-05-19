import { createSlice } from "@reduxjs/toolkit";

export const SettingsSlice = createSlice({
  name: "settings",
  initialState: {
    IsTestMode: true,
    IsPracticeMode: false,
    Difficulty: "Easy",
    Muted: false,
    DarkUI: false,
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
    toggleMuted: (state) => {
      state.Muted = !state.Muted;
    },
    toggleDarkUI: (state) => {
      state.DarkUI = !state.DarkUI;
    },
  },
});

export const { changeMode, changeDifficulty, toggleDarkUI, toggleMuted } =
  SettingsSlice.actions;
export default SettingsSlice.reducer;
