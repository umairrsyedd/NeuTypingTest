import {
  incrementLetter,
  markCorrect,
  markTyped,
  markIncorrect,
} from "Components/TextBox/TextboxSlice";
import {
  incrementCharsTyped,
  incrementCorrectChars,
  incrementError,
  incrementErrorPerChar,
} from "Components/Analytics/AnalyticsSlice";
import {
  resetTimer,
  stopTimer,
  toggleIsActive,
} from "Components/Timer/TimerSlice";
import { resetAnalytics } from "Components/Analytics/AnalyticsSlice";
import { generateText } from "Components/TextBox/TextboxSlice";
import { setKeyPressed } from "Components/Keyboard/KeyboardSlice.js";

export const keyCorrect = () => {
  return async (dispatch, getState) => {
    const { textbox } = getState();
    const { word, letter } = textbox.cursor;
    dispatch(markCorrect({ word, letter }));
    dispatch(markTyped({ word, letter }));
    dispatch(incrementCharsTyped());
    dispatch(incrementCorrectChars());
    dispatch(incrementLetter());
  };
};

export const keyIncorrect = () => {
  return async (dispatch, getState) => {
    const { textbox } = getState();
    const { word, letter } = textbox.cursor;
    dispatch(incrementError());
    dispatch(incrementErrorPerChar(textbox.text[word][letter]));
    dispatch(incrementCharsTyped());
    dispatch(markTyped({ word, letter }));
    dispatch(markIncorrect({ word, letter }));
  };
};

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
