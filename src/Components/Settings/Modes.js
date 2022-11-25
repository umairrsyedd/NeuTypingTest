import React from "react";
import { connect } from "react-redux";
import { changeMode } from "./SettingsSlice";
import { resetTimer } from "Components/Timer/TimerSlice";
import { resetAnalytics } from "Components/Analytics/AnalyticsSlice";
import { generateText } from "Components/TextBox/TextboxSlice";
import { setKeyPressed } from "Components/Keyboard/KeyboardSlice.js";

function Modes({
  Difficulty,
  isEnded,
  zenMode,
  resetTimer,
  generateText,
  resetAnalytics,
  setKeyPressed,
  IsTestMode,
  IsPracticeMode,
}) {
  return (
    <div className="Settings__Modes">
      {zenMode && !isEnded ? (
        <div></div>
      ) : (
        <>
          <button
            className={`Button ${
              IsTestMode ? "Button--Active" : "Button--Inactive"
            }`}
            onClick={() => {
              changeMode("Test");
              resetTimer();
              generateText(Difficulty);
              resetAnalytics();
              setKeyPressed("");
            }}
          >
            Test Mode
          </button>
          <button
            className={`Button ${
              IsPracticeMode ? "Button--Active" : "Button--Inactive"
            }`}
            onClick={() => {
              changeMode("Practice");
              resetTimer();
              generateText(Difficulty);
              resetAnalytics();
              setKeyPressed("");
            }}
            data-tip="Practice Without a Time Limit"
          >
            Practice Mode
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
    IsTestMode: state.settings.IsTestMode,
    IsPracticeMode: state.settings.IsPracticeMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetTimer: () => dispatch(resetTimer()),
    generateText: (difficulty) => dispatch(generateText(difficulty)),
    resetAnalytics: () => dispatch(resetAnalytics()),
    setKeyPressed: (key) => dispatch(setKeyPressed(key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modes);
