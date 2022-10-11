import { createSlice } from "@reduxjs/toolkit";

export const KeyboardSlice = createSlice({
  name: "keyboard",
  initialState: {
    isCapsLock: false,
    keyPressed: "null",
  },
  reducers: {
    setKeyPressed: (state, action) => {
      state.keyPressed = action.payload;
    },
    setCapsLock: (state, action) => {
      state.isCapsLock = action.payload;
    },
  },
});

export const { setKeyPressed, setCapsLock } = KeyboardSlice.actions;
export default KeyboardSlice.reducer;
