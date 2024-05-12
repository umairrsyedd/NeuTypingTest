import React, { useState, useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import {
  toggleIsFocused,
  generateText,
  setZenMode,
} from "Components/TextBox/TextboxSlice.js";
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
import {
  highlightCorrectKey,
  highlightIncorrectKey,
  highlightSpecialKey,
  removeHighlightSpecialKey,
} from "Utils/KeyboardHighlight.js";
import { keyCorrect, keyIncorrect } from "State/GlobalActions.js";
const Result = lazy(() => import("Components/Result/Result.js"));

function TextBox({
  word,
  letter,
  text,
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
  startTimer,
  toggleIsActive,
  toggleIsFocused,
  changeAccuracy,
  setZenMode,
  keyCorrect,
  keyIncorrect,
}) {
  const [playKeySound] = useSound(keySound, { volume: 0.3 });
  const [playWrongKeySound] = useSound(wrongKeySound, { volume: 0.3 });
  const [cursorHidden, setCursorHidden] = useState(false);
  useEffect(() => {
    generateText(Difficulty);
    setKeyPressed("");
    window.addEventListener("keypress", () => {
      document.getElementsByClassName("TextBox")[0].focus();
    });
  }, [Difficulty, generateText, setKeyPressed]);

  const handleKeyPress = (e) => {
    setZenMode(true);
    setCursorHidden(true);
    let key = e.key;
    if (isEnded) {
      return;
    }

    if (e.getModifierState("CapsLock")) {
      highlightSpecialKey("CapsLock");
    } else if (e.getModifierState("Shift")) {
      highlightSpecialKey("Shift");
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
    setKeyPressed(key);
    if (key === text[word][letter]) {
      keyCorrect();
      highlightCorrectKey(key);
      if (isPracticeMode) {
        changeAccuracy();
      }
      if (!isMuted) {
        playKeySound();
      }
    } else {
      keyIncorrect();
      highlightIncorrectKey(key);
      if (isPracticeMode) {
        changeAccuracy();
      }
      if (!isMuted) {
        playWrongKeySound();
      }
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "CapsLock") {
      removeHighlightSpecialKey("CapsLock");
    } else if (e.key === "Shift") {
      removeHighlightSpecialKey("Shift");
    }
  };
  return (
    <>
      {!isEnded ? (
        <>
          <div
            className={`Button TextBox ${
              cursorHidden && hasStarted ? "CursorHidden" : ""
            }`}
            tabIndex="0"
            onKeyDown={(e) => {
              handleKeyPress(e);
            }}
            onKeyUp={(e) => {
              handleKeyUp(e);
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
    startTimer: () => dispatch(startTimer()),
    toggleIsActive: () => dispatch(toggleIsActive()),
    toggleIsFocused: () => dispatch(toggleIsFocused()),
    changeAccuracy: () => dispatch(changeAccuracy()),
    setZenMode: (isZenMode) => dispatch(setZenMode(isZenMode)),
    keyCorrect: () => dispatch(keyCorrect()),
    keyIncorrect: () => dispatch(keyIncorrect()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextBox);
