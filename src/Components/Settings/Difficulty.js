import { useSelector, useDispatch } from "react-redux";
import { changeDifficulty } from "State/Features/SettingsSlice";
import { resetTimer } from "State/Features/TimerSlice";
import { resetAnalytics } from "State/Features/AnalyticsSlice";
import { generateText } from "State/Features/TextboxSlice";
import { setKeyPressed } from "State/Features/KeyboardSlice.js";
import { useEffect } from "react";

export default function Difficulty() {
  const Difficulty = useSelector((state) => state.settings.Difficulty);
  const isEnded = useSelector((state) => state.timer.isEnded);
  const zenMode = useSelector((state) => state.textbox.zenMode);
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

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
              dispatch(changeDifficulty("Easy"));
              dispatch(resetTimer());
              dispatch(generateText("Easy"));
              dispatch(resetAnalytics());
              dispatch(setKeyPressed(""));
            }}
          >
            Easy
          </button>
          <button
            className={`Button ${
              Difficulty === "Medium" ? "Button--Active" : "Button--Inactive"
            }`}
            onClick={() => {
              dispatch(changeDifficulty("Medium"));
              dispatch(resetTimer());
              dispatch(generateText("Medium"));
              dispatch(resetAnalytics());
              dispatch(setKeyPressed(""));
            }}
          >
            Medium
          </button>
          <button
            className={`Button ${
              Difficulty === "Hard" ? "Button--Active" : "Button--Inactive"
            }`}
            onClick={() => {
              dispatch(changeDifficulty("Hard"));
              dispatch(resetTimer());
              dispatch(generateText("Hard"));
              dispatch(resetAnalytics());
              dispatch(setKeyPressed(""));
            }}
          >
            Hard
          </button>
        </>
      )}
    </div>
  );
}
