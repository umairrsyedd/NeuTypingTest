import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTimeLimit } from "State/Features/TimerSlice";
import { resetTimer } from "State/Features/TimerSlice";
import { resetAnalytics } from "State/Features/AnalyticsSlice";
import { generateText } from "State/Features/TextboxSlice";
import { setKeyPressed } from "State/Features/KeyboardSlice.js";

export default function TimeLimit() {
  const TimeLimit = useSelector((state) => state.timer.timeLimit);
  const IsTestMode = useSelector((state) => state.settings.IsTestMode);
  const Difficulty = useSelector((state) => state.settings.Difficulty);
  const isEnded = useSelector((state) => state.timer.isEnded);
  const zenMode = useSelector((state) => state.textbox.zenMode);
  const dispatch = useDispatch();
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
                dispatch(setTimeLimit(1));
                dispatch(resetTimer());
                dispatch(generateText(Difficulty));
                dispatch(resetAnalytics());
                dispatch(setKeyPressed(""));
              }}
            >
              1m
            </button>
            <button
              className={`Button ${
                TimeLimit === 3 ? "Button--Active" : "Button--Inactive"
              }`}
              onClick={() => {
                dispatch(setTimeLimit(3));
                dispatch(resetTimer());
                dispatch(generateText(Difficulty));
                dispatch(resetAnalytics());
                dispatch(setKeyPressed(""));
              }}
            >
              3m
            </button>
            <button
              className={`Button ${
                TimeLimit === 5 ? "Button--Active" : "Button--Inactive"
              }`}
              onClick={() => {
                dispatch(setTimeLimit(5));
                dispatch(resetTimer());
                dispatch(generateText(Difficulty));
                dispatch(resetAnalytics());
                dispatch(setKeyPressed(""));
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
