import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ResultChart from "./ResultChart";
import { resetTimer } from "State/Features/TimerSlice";
import { generateText } from "State/Features/TextboxSlice";
import { resetAnalytics } from "State/Features/AnalyticsSlice";
import { toggleIsFocused } from "State/Features/TextboxSlice";
import { setKeyPressed } from "State/Features/KeyboardSlice";
import { setZenMode } from "State/Features/TextboxSlice";
import "./Result.css";

export default function Result() {
  const dispatch = useDispatch();
  const { speed } = useSelector((state) => state.analytics);
  const Difficulty = useSelector((state) => state.settings.Difficulty);

  useEffect(() => {
    dispatch(setZenMode(false));
    dispatch(toggleIsFocused());
  }, [dispatch]);
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
            dispatch(resetTimer());
            dispatch(generateText(Difficulty));
            dispatch(resetAnalytics());
            dispatch(setKeyPressed(""));
            dispatch(setZenMode(false));
          }}
        >
          New Test
        </div>
      </div>
      <ResultChart />
    </div>
  );
}
