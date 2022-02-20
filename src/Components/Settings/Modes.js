import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../../State/Features/SettingsSlice";

export default function Modes() {
  const IsTestMode = useSelector((state) => state.settings.IsTestMode);
  const IsPracticeMode = useSelector((state) => state.settings.IsPracticeMode);
  const dispatch = useDispatch();
  return (
    <div className="Settings--Modes">
      <button
        className={`Button ${
          IsTestMode ? "Button--Active" : "Button--Inactive"
        }`}
        onClick={() => dispatch(changeMode("Test"))}
      >
        Test Mode
      </button>
      <button
        className={`Button ${
          IsPracticeMode ? "Button--Active" : "Button--Inactive"
        }`}
        onClick={() => dispatch(changeMode("Practice"))}
      >
        Practice Mode
      </button>
    </div>
  );
}
