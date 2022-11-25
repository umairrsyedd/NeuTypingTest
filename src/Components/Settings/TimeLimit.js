import React from "react";
import { connect } from "react-redux";
import { setTimeLimit } from "Components/Timer/TimerSlice";
import { resetTimer } from "Components/Timer/TimerSlice";
import { resetAnalytics } from "Components/Analytics/AnalyticsSlice";
import { generateText } from "Components/TextBox/TextboxSlice";
import { setKeyPressed } from "Components/Keyboard/KeyboardSlice.js";

function TimeLimit({
  TimeLimit,
  IsTestMode,
  Difficulty,
  zenMode,
  setTimeLimit,
  resetTimer,
  generateText,
  resetAnalytics,
  setKeyPressed,
}) {
  return (
    <div className="Settings__Time">
      {
        IsTestMode && !zenMode ? (
          <>
            <button
              className={`Button ${
                TimeLimit === 1 ? "Button--Active" : "Button--Inactive"
              }`}
              onClick={() => {
                setTimeLimit(1);
                resetTimer();
                generateText(Difficulty);
                resetAnalytics();
                setKeyPressed("");
              }}
            >
              1m
            </button>
            <button
              className={`Button ${
                TimeLimit === 3 ? "Button--Active" : "Button--Inactive"
              }`}
              onClick={() => {
                setTimeLimit(3);
                resetTimer();
                generateText(Difficulty);
                resetAnalytics();
                setKeyPressed("");
              }}
            >
              3m
            </button>
            <button
              className={`Button ${
                TimeLimit === 5 ? "Button--Active" : "Button--Inactive"
              }`}
              onClick={() => {
                setTimeLimit(5);
                resetTimer();
                generateText(Difficulty);
                resetAnalytics();
                setKeyPressed("");
              }}
            >
              5m
            </button>
          </>
        ) : (
          <div></div>
        ) // To Avoid Layout Shift
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    TimeLimit: state.timer.timeLimit,
    IsTestMode: state.settings.IsTestMode,
    Difficulty: state.settings.Difficulty,
    zenMode: state.textbox.zenMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTimeLimit: (time) => dispatch(setTimeLimit(time)),
    resetTimer: () => dispatch(resetTimer()),
    generateText: (difficulty) => dispatch(generateText(difficulty)),
    resetAnalytics: () => dispatch(resetAnalytics()),
    setKeyPressed: (key) => dispatch(setKeyPressed(key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeLimit);
