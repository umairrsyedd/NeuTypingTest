import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { EasyWords } from "Data/EasyWords";
import GenerateText, { MakeTypedArray } from "Utils/GenerateText";

// create async thunk to generate text and typed array
export const generateText = createAsyncThunk(
  "text/generateText",
  (Difficulty) => {
    const text = GenerateText(Difficulty);
    const typedArray = MakeTypedArray(text);
    return { text, typedArray };
  }
);

export const TextBoxSlice = createSlice({
  name: "textbox",
  initialState: {
    text: [],
    typedArray: [[]],
    cursor: {
      word: 0,
      letter: 0,
    },
    isFocused: false,
    keyPressed: "",
    zenMode: false,
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
    resetTextbox: (state) => {
      state.text = GenerateText(EasyWords);
      state.cursor = {
        word: 0,
        letter: 0,
      };
    },
    toggleIsFocused: (state) => {
      state.isFocused = !state.isFocused;
    },
    markTyped: (state, action) => {
      state.typedArray[action.payload.word][
        action.payload.letter
      ].untyped = false;
    },
    markCorrect: (state, action) => {
      if (
        state.typedArray[action.payload.word][action.payload.letter]
          .incorrect === false
      ) {
        state.typedArray[action.payload.word][
          action.payload.letter
        ].correct = true;
      }
    },
    markIncorrect: (state, action) => {
      state.typedArray[action.payload.word][
        action.payload.letter
      ].incorrect = true;
    },
    setZenMode: (state, action) => {
      state.zenMode = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(generateText.fulfilled, (state, action) => {
      state.text = action.payload.text;
      state.typedArray = action.payload.typedArray;
      state.cursor = {
        word: 0,
        letter: 0,
      };
    });
  },
});

export const {
  setText,
  incrementLetter,
  decrementLetter,
  reset,
  toggleIsFocused,
  resetTextbox,
  settypedArray,
  markTyped,
  markCorrect,
  markIncorrect,
  setZenMode,
} = TextBoxSlice.actions;
export default TextBoxSlice.reducer;
