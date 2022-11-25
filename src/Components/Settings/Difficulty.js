import React from "react";
import { connect } from "react-redux";
import { changeDifficulty } from "Components/Settings/SettingsSlice";
import { resetTimer } from "Components/Timer/TimerSlice";
import { resetAnalytics } from "Components/Analytics/AnalyticsSlice";
import { generateText } from "Components/TextBox/TextboxSlice";
import { setKeyPressed } from "Components/Keyboard/KeyboardSlice.js";
import { useEffect } from "react";

function Difficulty({
  Difficulty,
  changeDifficulty,
  resetTimer,
  generateText,
  resetAnalytics,
  setKeyPressed,
  isEnded,
  zenMode,
}) {
  useEffect(() => {}, [Difficulty, isEnded, zenMode]);

  return (
    <div className="Settings__Difficulty">
      {zenMode && !isEnded ? (
        <></>
      ) : (
        <>
          <button
            className={`Button ${
              Difficulty === "Easy" ? "Button--Active" : "Button--Inactive"
            }`}
            onClick={() => {
              changeDifficulty("Easy");
              resetTimer();
              generateText("Easy");
              resetAnalytics();
              setKeyPressed("");
            }}
          >
            Easy
          </button>
          <button
            className={`Button ${
              Difficulty === "Medium" ? "Button--Active" : "Button--Inactive"
            }`}
            onClick={() => {
              changeDifficulty("Medium");
              resetTimer();
              generateText("Medium");
              resetAnalytics();
              setKeyPressed("");
            }}
          >
            Medium
          </button>
          <button
            className={`Button ${
              Difficulty === "Hard" ? "Button--Active" : "Button--Inactive"
            }`}
            onClick={() => {
              changeDifficulty("Hard");
              resetTimer();
              generateText("Hard");
              resetAnalytics();
              setKeyPressed("");
            }}
          >
            Hard
          </button>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Difficulty: state.settings.Difficulty,
    isEnded: state.timer.isEnded,
    zenMode: state.textbox.zenMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeDifficulty: (Difficulty) => dispatch(changeDifficulty(Difficulty)),
    resetTimer: () => dispatch(resetTimer()),
    generateText: (Difficulty) => dispatch(generateText(Difficulty)),
    resetAnalytics: () => dispatch(resetAnalytics()),
    setKeyPressed: (keyPressed) => dispatch(setKeyPressed(keyPressed)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Difficulty);
