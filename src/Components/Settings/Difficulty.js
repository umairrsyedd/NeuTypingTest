import React from "react";
import { connect } from "react-redux";
import { changeDifficulty } from "Components/Settings/SettingsSlice";
import { resetTimer } from "Components/Timer/TimerSlice";
import { resetAnalytics } from "Components/Analytics/AnalyticsSlice";
import { generateText } from "Components/TextBox/TextboxSlice";
import { setKeyPressed } from "Components/Keyboard/KeyboardSlice.js";
import { useEffect } from "react";
import { resetTest } from "State/GlobalActions";

function Difficulty({
  Difficulty,
  changeDifficulty,
  isEnded,
  zenMode,
  resetTest,
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
              resetTest();
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
              resetTest();
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
              resetTest();
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
    resetTest: () => dispatch(resetTest()),
    changeDifficulty: (Difficulty) => dispatch(changeDifficulty(Difficulty)),
    resetTimer: () => dispatch(resetTimer()),
    generateText: (Difficulty) => dispatch(generateText(Difficulty)),
    resetAnalytics: () => dispatch(resetAnalytics()),
    setKeyPressed: (keyPressed) => dispatch(setKeyPressed(keyPressed)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Difficulty);
