import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDifficulty } from "State/Features/SettingsSlice";

export default function Difficulty() {
  const Difficulty = useSelector((state) => state.settings.Difficulty);
  const dispatch = useDispatch();
  return (
    <div className="Settings--Difficulty">
      <button
        className={`Button ${
          Difficulty === "Easy" ? "Button--Active" : "Button--Inactive"
        }`}
        onClick={() => dispatch(changeDifficulty("Easy"))}
      >
        Easy
      </button>
      <button
        className={`Button ${
          Difficulty === "Medium" ? "Button--Active" : "Button--Inactive"
        }`}
        onClick={() => dispatch(changeDifficulty("Medium"))}
      >
        Medium
      </button>
      <button
        className={`Button ${
          Difficulty === "Hard" ? "Button--Active" : "Button--Inactive"
        }`}
        onClick={() => dispatch(changeDifficulty("Hard"))}
      >
        Hard
      </button>
    </div>
  );
}
