import React, { useState, useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import {
  incrementLetter,
  toggleIsFocused,
  generateText,
  markTyped,
  markCorrect,
  markIncorrect,
  setZenMode,
} from "Components/TextBox/TextboxSlice.js";
import {
  incrementError,
  incrementErrorPerChar,
} from "Components/Analytics/AnalyticsSlice.js";
import {
  incrementCharsTyped,
  incrementCorrectChars,
} from "Components/Analytics/AnalyticsSlice.js";
import { startTimer, toggleIsActive } from "Components/Timer/TimerSlice.js";
import Words from "./Words.js";
import "./TextBox.css";
import {
  setKeyPressed,
  setCapsLock,
} from "Components/Keyboard/KeyboardSlice.js";
import useSound from "use-sound";
import keySound from "Assets/KeySound.wav";
import wrongKeySound from "Assets/WrongKeySound.wav";
import { changeAccuracy } from "Components/Analytics/AnalyticsSlice.js";
import CapsLock from "Components/CapsLock/CapsLock.js";
import {
  highlightCorrectKey,
  highlightIncorrectKey,
} from "Utils/KeyboardHighlight.js";
const Result = lazy(() => import("Components/Result/Result.js"));

function TextBox({
  word,
  letter,
  text,
  cursor,
  isActive,
  isEnded,
  isFocused,
  isMuted,
  isPracticeMode,
  Difficulty,
  hasStarted,
  generateText,
  setKeyPressed,
  setCapsLock,
  incrementLetter,
  incrementCharsTyped,
  incrementCorrectChars,
  markTyped,
  markCorrect,
  markIncorrect,
  incrementError,
  incrementErrorPerChar,
  startTimer,
  toggleIsActive,
  toggleIsFocused,
  changeAccuracy,
  setZenMode,
}) {
  const [playKeySound] = useSound(keySound, { volume: 0.3 });
  const [playWrongKeySound] = useSound(wrongKeySound, { volume: 0.3 });
  const [cursorHidden, setCursorHidden] = useState(false);
  useEffect(() => {
    generateText(Difficulty);
    setKeyPressed("");
    // window.addEventListener("keypress", () => {
    //   document.getElementsByClassName("TextBox")[0].focus();
    // });
  }, [Difficulty, generateText, setKeyPressed]);

  const handleKeyPress = (e) => {
    setZenMode(true);
    setCursorHidden(true);
    let key = e.key;
    if (isEnded) {
      return;
    }
    // if (e.shiftKey) {
    //   return;
    // }
    if (e.getModifierState("CapsLock")) {
      setCapsLock(true);
    } else {
      setCapsLock(false);
    }
    if (!isActive || !hasStarted) {
      startTimer();
    }
    // if text is ending reset
    if (text[word].length - 1 === letter) {
      if (word === text.length - 1) {
        generateText(Difficulty);
        setKeyPressed("");
        return;
      }
    }
    if (key === " ") {
      key = "␣";
    }
    setKeyPressed(key);
    if (key === text[word][letter]) {
      incrementLetter();
      incrementCharsTyped();
      incrementCorrectChars();
      markTyped({ word, letter });
      markCorrect({ word, letter });
      highlightCorrectKey(key);
      if (isPracticeMode) {
        changeAccuracy();
      }
      if (!isMuted) {
        playKeySound();
      }
    } else {
      incrementError();
      incrementErrorPerChar(text[word][letter]);
      incrementCharsTyped();
      markTyped({ word, letter });
      markIncorrect({ word, letter });
      highlightIncorrectKey(key);
      if (isPracticeMode) {
        changeAccuracy();
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
              toggleIsActive();
              toggleIsFocused();
              setZenMode(false);
            }}
            onFocus={() => {
              toggleIsFocused();
            }}
            onMouseLeave={() => {
              setCursorHidden(false);
              setZenMode(false);
            }}
          >
            <Words text={text} />
            {!isFocused ? (
              <div className="Text__Activate">
                Click Or Start Typing To Activate...
              </div>
            ) : (
              <span></span>
            )}
          </div>
        </>
      ) : (
        <Suspense
          fallback={
            <div className="Result--Fallback">Calculating Results....</div>
          }
        >
          <Result />
        </Suspense>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    text: state.textbox.text,
    word: state.textbox.cursor.word,
    letter: state.textbox.cursor.letter,
    cursor: state.textbox.cursor,
    isActive: state.timer.isActive,
    isEnded: state.timer.isEnded,
    isFocused: state.textbox.isFocused,
    isMuted: state.settings.Muted,
    isPracticeMode: state.settings.IsPracticeMode,
    Difficulty: state.settings.Difficulty,
    hasStarted: state.timer.hasStarted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    generateText: (Difficulty) => dispatch(generateText(Difficulty)),
    setKeyPressed: (key) => dispatch(setKeyPressed(key)),
    setCapsLock: (isCapsLock) => dispatch(setCapsLock(isCapsLock)),
    incrementLetter: () => dispatch(incrementLetter()),
    incrementCharsTyped: () => dispatch(incrementCharsTyped()),
    incrementCorrectChars: () => dispatch(incrementCorrectChars()),
    markTyped: (cursor) => dispatch(markTyped(cursor)),
    markCorrect: (cursor) => dispatch(markCorrect(cursor)),
    markIncorrect: (cursor) => dispatch(markIncorrect(cursor)),
    incrementError: () => dispatch(incrementError()),
    incrementErrorPerChar: (char) => dispatch(incrementErrorPerChar(char)),
    startTimer: () => dispatch(startTimer()),
    toggleIsActive: () => dispatch(toggleIsActive()),
    toggleIsFocused: () => dispatch(toggleIsFocused()),
    changeAccuracy: () => dispatch(changeAccuracy()),
    setZenMode: (isZenMode) => dispatch(setZenMode(isZenMode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextBox);
