import React, { useEffect } from "react";
import { connect } from "react-redux";
import ResultChart from "./ResultChart";
import { resetTimer } from "Components/Timer/TimerSlice";
import { generateText } from "Components/TextBox/TextboxSlice";
import { resetAnalytics } from "Components/Analytics/AnalyticsSlice";
import { toggleIsFocused } from "Components/TextBox/TextboxSlice";
import { setKeyPressed } from "Components/Keyboard/KeyboardSlice";
import { setZenMode } from "Components/TextBox/TextboxSlice";
import { resetTest } from "State/GlobalActions";
import "./Result.css";

function Result({
  speed,
  resetTimer,
  generateText,
  resetAnalytics,
  setKeyPressed,
  setZenMode,
  resetTest,
}) {
  useEffect(() => {
    setZenMode(false);
    toggleIsFocused();
  }, [resetTimer, generateText, resetAnalytics, setKeyPressed, setZenMode]);
  return (
    <div className="TestEnd__Container">
      <div>
        <div>
          You Typed at
          <span className="TestEnd__Emp">
            {Math.round(speed)} words per minute
          </span>
          which is {speed >= 100 ? "amazingly" : ""}
          <span className="TestEnd__Emp">
            {speed > 45 ? "above Average" : "below Average"}
          </span>
        </div>
        <div
          className="Button Button--Active Result__Button"
          onClick={() => {
            resetTest();
          }}
        >
          New Test
        </div>
      </div>
      <ResultChart />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    speed: state.analytics.speed,
    Difficulty: state.settings.Difficulty,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetTimer: () => dispatch(resetTimer()),
    generateText: (Difficulty) => dispatch(generateText(Difficulty)),
    resetAnalytics: () => dispatch(resetAnalytics()),
    setKeyPressed: (key) => dispatch(setKeyPressed(key)),
    setZenMode: (mode) => dispatch(setZenMode(mode)),
    resetTest: () => dispatch(resetTest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
