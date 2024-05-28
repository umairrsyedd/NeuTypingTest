import React, { useState, useEffect, lazy, Suspense, useRef } from "react";
import { connect } from "react-redux";
import {
  setFocused,
  generateText,
  setZenMode,
} from "Components/TextBox/TextboxSlice.js";
import { startTimer, toggleIsActive } from "Components/Timer/TimerSlice.js";
import Words from "./Words.js";
import "./TextBox.css";
import { setKeyPressed } from "Components/Keyboard/KeyboardSlice.js";
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
  startTimer,
  toggleIsActive,
  setFocused,
  changeAccuracy,
  setZenMode,
  keyCorrect,
  keyIncorrect,
}) {
  const [playKeySound] = useSound(keySound, { volume: 0.3 });
  const [playWrongKeySound] = useSound(wrongKeySound, { volume: 0.3 });
  const [cursorHidden, setCursorHidden] = useState(false);
  let textBoxRef = useRef(null);

  useEffect(() => {
    generateText(Difficulty);
    setKeyPressed("");
    window.addEventListener("keypress", () => textBoxRef.current.focus());
  }, [Difficulty, generateText, setKeyPressed]);

  const handleKeyPress = (e) => {
    setZenMode(true);
    setCursorHidden(true);
    let pressedKey = e.key;
    if (isEnded) return;

    const modiferKeys = ["Shift", "CapsLock"];

    if (e.getModifierState("CapsLock")) highlightSpecialKey("CapsLock");
    if (e.getModifierState("Shift")) highlightSpecialKey("Shift");

    if (!e.getModifierState("CapsLock")) removeHighlightSpecialKey("CapsLock");
    if (!e.getModifierState("Shift")) removeHighlightSpecialKey("Shift");

    if (modiferKeys.includes(pressedKey)) return;

    if (!isActive || !hasStarted) startTimer();

    // if text is ending reset
    if (text[word].length - 1 === letter) {
      if (word === text.length - 1) {
        generateText(Difficulty);
        setKeyPressed("");
        return;
      }
    }
    setKeyPressed(pressedKey);
    if (pressedKey === text[word][letter]) {
      keyCorrect();
      highlightCorrectKey(pressedKey);
      if (isPracticeMode) changeAccuracy();
      if (!isMuted) playKeySound();
    } else {
      keyIncorrect();
      highlightIncorrectKey(pressedKey);
      if (isPracticeMode) changeAccuracy();
      if (!isMuted) playWrongKeySound();
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "CapsLock") removeHighlightSpecialKey("CapsLock");
    if (e.key === "Shift") removeHighlightSpecialKey("Shift");
  };

  return (
    <>
      {!isEnded ? (
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
            setFocused(false);
            setZenMode(false);
          }}
          onFocus={() => {
            setFocused(true);
          }}
          onMouseLeave={() => {
            setCursorHidden(false);
            setZenMode(false);
          }}
          ref={textBoxRef}
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
    startTimer: () => dispatch(startTimer()),
    toggleIsActive: () => dispatch(toggleIsActive()),
    setFocused: (isFocused) => dispatch(setFocused(isFocused)),
    changeAccuracy: () => dispatch(changeAccuracy()),
    setZenMode: (isZenMode) => dispatch(setZenMode(isZenMode)),
    keyCorrect: () => dispatch(keyCorrect()),
    keyIncorrect: () => dispatch(keyIncorrect()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextBox);
