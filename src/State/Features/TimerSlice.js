import { createSlice } from "@reduxjs/toolkit";

export const TimerSlice = createSlice({
  name: "timer",
  initialState: {
    timeLeft: {
      minutes: 1,
      seconds: 0,
    },
    timeLimit: 1,
    isActive: false,
    isEnded: false,
    hasStarted: false,
    secondsUsed: 0,
  },
  reducers: {
    setTimeLimit: (state, action) => {
      state.timeLeft.minutes = action.payload;
      state.timeLeft.seconds = 0;
      state.timeLimit = action.payload;
    },
    startTimer: (state) => {
      state.hasStarted = true;
      state.isActive = true;
    },
    stopTimer: (state) => {
      state.isActive = false;
    },
    toggleIsActive: (state) => {
      state.isActive = !state.isActive;
    },
    tick: (state) => {
      if (state.timeLeft.seconds === 0) {
        if (state.timeLeft.minutes > 0) {
          state.timeLeft.minutes--;
          state.timeLeft.seconds = 59;
          state.secondsUsed++;
        } else {
          state.isEnded = true;
        }
      } else {
        state.timeLeft.seconds -= 1;
        state.secondsUsed++;
      }
    },
    resetTimer: (state) => {
      state.timeLeft.minutes = state.timeLimit;
      state.timeLeft.seconds = 0;
      state.isActive = false;
      state.isEnded = false;
      state.hasStarted = false;
      state.secondsUsed = 0;
    },
  },
});

export const {
  setTimeLimit,
  startTimer,
  stopTimer,
  toggleIsActive,
  tick,
  resetTimer,
} = TimerSlice.actions;
export default TimerSlice.reducer;
