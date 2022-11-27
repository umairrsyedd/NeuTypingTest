import { createSlice } from "@reduxjs/toolkit";
import {
  resetTimer,
  stopTimer,
  toggleIsActive,
} from "Components/Timer/TimerSlice";
import { resetAnalytics } from "Components/Analytics/AnalyticsSlice";
import { generateText } from "Components/TextBox/TextboxSlice";
import { setKeyPressed } from "Components/Keyboard/KeyboardSlice.js";

export const HomeSlice = createSlice({
  name: "home",
  initialState: {},
  reducers: {},
});

export const resetTest = () => {
  return async (dispatch, getState) => {
    const difficulty = getState().settings.Difficulty;
    dispatch(resetTimer());
    dispatch(resetAnalytics());
    dispatch(generateText(difficulty));
    dispatch(setKeyPressed(""));
    dispatch(toggleIsActive());
    dispatch(stopTimer());
  };
};

export default HomeSlice.reducer;
