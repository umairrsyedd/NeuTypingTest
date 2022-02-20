import { createSlice } from "@reduxjs/toolkit";

export const TimerSlice = createSlice({
  name: "timer",
  initialState: {
    timeLeft: {
      minutes: 1,
      seconds: 0,
    },
    isActive: false,
    isEnded: false,
  },
  reducers: {
    setTimeLimit: (state, action) => {
      state.timeLeft.minutes = action.payload;
      state.timeLeft.seconds = 0;
    },
    startTimer: (state) => {
      state.isActive = true;
    },
    stopTimer: (state) => {
      state.isActive = false;
    },
    tick: (state) => {
      if (state.timeLeft.seconds === 0) {
        if (state.timeLeft.minutes > 0) {
          state.timeLeft.minutes--;
          state.timeLeft.seconds = 59;
        } else {
          state.isEnded = true;
        }
      } else {
        state.timeLeft.seconds -= 1;
      }
    },
  }
});

export const { setTimeLimit, startTimer, stopTimer, tick } = TimerSlice.actions;
export default TimerSlice.reducer;
