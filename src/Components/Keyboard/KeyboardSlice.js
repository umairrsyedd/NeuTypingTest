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
  },
});

export const { setKeyPressed } = KeyboardSlice.actions;
export default KeyboardSlice.reducer;
