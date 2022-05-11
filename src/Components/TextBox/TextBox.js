import React, { useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementLetter,
  toggleIsFocused,
  generateText,
  markTyped,
  markCorrect,
  markIncorrect,
  setZenMode,
} from "State/Features/TextboxSlice.js";
import {
  incrementError,
  incrementErrorPerChar,
} from "State/Features/AnalyticsSlice.js";
import {
  incrementCharsTyped,
  incrementCorrectChars,
} from "State/Features/AnalyticsSlice.js";
import { startTimer, toggleIsActive } from "State/Features/TimerSlice.js";
import Words from "./Words.js";
import "./TextBox.css";
import { setKeyPressed, setCapsLock } from "State/Features/KeyboardSlice.js";
import useSound from "use-sound";
import keySound from "Assets/KeySound.wav";
import wrongKeySound from "Assets/WrongKeySound.wav";
import { changeAccuracy } from "State/Features/AnalyticsSlice.js";
import CapsLock from "Components/CapsLock/CapsLock.js";
import { useState } from "react";
import {
  highlightCorrectKey,
  highlightIncorrectKey,
} from "Utils/KeyboardHighlight.js";
const Result = lazy(() => import("Components/Result/Result.js"));

export default function TextBox() {
  const { text, cursor } = useSelector((state) => state.textbox);
  const { word, letter } = cursor;
  const { isActive } = useSelector((state) => state.timer);
  const { isEnded } = useSelector((state) => state.timer);
  const [playKeySound] = useSound(keySound, { volume: 0.3 });
  const [playWrongKeySound] = useSound(wrongKeySound, { volume: 0.3 });
  const isFocused = useSelector((state) => state.textbox.isFocused);
  const isMuted = useSelector((state) => state.settings.Muted);
  const isPracticeMode = useSelector((state) => state.settings.IsPracticeMode);
  const [cursorHidden, setCursorHidden] = useState(false);
  const hasStarted = useSelector((state) => state.timer.hasStarted);
  const Difficulty = useSelector((state) => state.settings.Difficulty);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateText(Difficulty));
    dispatch(setKeyPressed(""));
  }, [Difficulty, dispatch]);

  const handleKeyPress = (e) => {
    dispatch(setZenMode(true));
    setCursorHidden(true);
    let key = e.key;
    if (isEnded) {
      return;
    }
    if (e.getModifierState("CapsLock")) {
      dispatch(setCapsLock(true));
    } else {
      dispatch(setCapsLock(false));
    }
    if (!isActive || !hasStarted) {
      dispatch(startTimer());
    }
    // if text is ending reset
    if (text[word].length - 1 === letter) {
      if (word === text.length - 1) {
        dispatch(generateText(Difficulty));
        dispatch(setKeyPressed(""));
        return;
      }
    }
    if (key === " ") {
      key = "␣";
    }
    dispatch(setKeyPressed(key));
    if (key === text[word][letter]) {
      dispatch(incrementLetter());
      dispatch(incrementCharsTyped());
      dispatch(incrementCorrectChars());
      dispatch(markTyped({ word, letter }));
      dispatch(markCorrect({ word, letter }));
      highlightCorrectKey(key);
      if (isPracticeMode) {
        dispatch(changeAccuracy());
      }
      if (!isMuted) {
        playKeySound();
      }
    } else {
      dispatch(incrementError());
      dispatch(incrementErrorPerChar(text[word][letter]));
      dispatch(incrementCharsTyped());
      dispatch(markTyped({ word, letter }));
      dispatch(markIncorrect({ word, letter }));
      highlightIncorrectKey(key);
      if (isPracticeMode) {
        dispatch(changeAccuracy());
      }
      if (!isMuted) {
        playWrongKeySound();
      }
    }
  };

  return (
    <>
      {!isEnded ? (
        <>
          <CapsLock />
          <div
            className={`Button TextBox ${
              cursorHidden && hasStarted ? "CursorHidden" : ""
            }`}
            tabIndex="0"
            onKeyPress={(e) => {
              handleKeyPress(e);
            }}
            onBlur={() => {
              dispatch(toggleIsActive());
              dispatch(toggleIsFocused());
              dispatch(setZenMode(false));
            }}
            onFocus={() => {
              dispatch(toggleIsFocused());
            }}
            onMouseLeave={() => {
              setCursorHidden(false);
              dispatch(setZenMode(false));
            }}
          >
            <Words text={text} />
            {!isFocused ? (
              <div className="Text__Activate">Click To Activate...</div>
            ) : (
              <span></span>
            )}
          </div>
        </>
      ) : (
        <Suspense fallback={<div>Loading Results...</div>}>
          <Result />
        </Suspense>
      )}
    </>
  );
}
