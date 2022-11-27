import { createSlice } from "@reduxjs/toolkit";

export const AnalyticsSlice = createSlice({
  name: "analytics",
  initialState: {
    accuracy: 0.0,
    errors: 0,
    speed: 0,
    charsTyped: 0,
    charsCorrect: 0,
    wordsTyped: 0,
    errorsPerChar: {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      m: 0,
      n: 0,
      o: 0,
      p: 0,
      q: 0,
      r: 0,
      s: 0,
      t: 0,
      u: 0,
      v: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 0,
      Space: 0,
    },
  },
  reducers: {
    changeAccuracy: (state) => {
      state.accuracy = Number.parseFloat(
        (state.charsCorrect / state.charsTyped) * 100
      ).toFixed(2);
    },
    incrementError: (state) => {
      state.errors++;
    },
    decrementError: (state) => {
      state.errors--;
    },
    incrementCharsTyped: (state) => {
      state.charsTyped++;
    },
    decrementCharsTyped: (state) => {
      if (state.charsTyped > 0) {
        state.charsTyped--;
      }
    },
    incrementCorrectChars: (state) => {
      state.charsCorrect++;
    },
    decrementCorrectChars: (state) => {
      state.charsCorrect--;
    },
    changeSpeed: (state, action) => {
      state.wordsTyped = state.charsCorrect / 5;
      state.speed = Number.parseFloat(
        state.wordsTyped / (action.payload / 60)
      ).toFixed(2);
    },
    resetAnalytics: (state) => {
      state.accuracy = 0;
      state.errors = 0;
      state.speed = 0;
      state.charsTyped = 0;
      state.charsCorrect = 0;
      state.wordsTyped = 0;
      state.errorsPerChar = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0,
        Space: 0,
      };
    },
    incrementErrorPerChar: (state, action) => {
      state.errorsPerChar[action.payload]++;
    },
  },
});

export const {
  changeAccuracy,
  incrementError,
  decrementError,
  incrementCharsTyped,
  decrementCharsTyped,
  incrementCorrectChars,
  decrementCorrectChars,
  changeSpeed,
  resetAnalytics,
  incrementErrorPerChar,
} = AnalyticsSlice.actions;
export default AnalyticsSlice.reducer;
