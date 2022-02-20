import { createSlice } from "@reduxjs/toolkit";
import { EasyWords } from "Data/EasyWords";
import GenerateText from "Utils/GenerateText";

export const TextBoxSlice = createSlice({
  name: "textbox",
  initialState: {
    text: GenerateText(EasyWords),
    cursor: {
      word: 0,
      letter: 0,
    },
  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    incrementLetter: (state) => {
      if (state.cursor.letter < state.text[state.cursor.word].length - 1) {
        state.cursor.letter++;
      } else if (state.cursor.word < state.text.length - 1) {
        state.cursor.word++;
        state.cursor.letter = 0;
      }
    },
    decrementLetter: (state) => {
      if (state.cursor.letter > 0) {
        state.cursor.letter--;
      } else if (state.cursor.word > 0) {
        state.cursor.word--;
        state.cursor.letter = state.text[state.cursor.word].length - 1;
      }
    },
  },
});

export const { setText, incrementLetter, decrementLetter } =
  TextBoxSlice.actions;
export default TextBoxSlice.reducer;
