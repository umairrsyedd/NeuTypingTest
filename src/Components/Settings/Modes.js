import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "./SettingsSlice";
import { resetTimer } from "Components/Timer/TimerSlice";
import { resetAnalytics } from "Components/Analytics/AnalyticsSlice";
import { generateText } from "Components/TextBox/TextboxSlice";
import { setKeyPressed } from "Components/Keyboard/KeyboardSlice.js";

export default function Modes() {
  const IsTestMode = useSelector((state) => state.settings.IsTestMode);
  const IsPracticeMode = useSelector((state) => state.settings.IsPracticeMode);
  const Difficulty = useSelector((state) => state.settings.Difficulty);
  const isEnded = useSelector((state) => state.timer.isEnded);
  const zenMode = useSelector((state) => state.textbox.zenMode);
  const dispatch = useDispatch();
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
              dispatch(changeMode("Test"));
              dispatch(resetTimer());
              dispatch(generateText(Difficulty));
              dispatch(resetAnalytics());
              dispatch(setKeyPressed(""));
            }}
          >
            Test Mode
          </button>
          <button
            className={`Button ${
              IsPracticeMode ? "Button--Active" : "Button--Inactive"
            }`}
            onClick={() => {
              dispatch(changeMode("Practice"));
              dispatch(resetTimer());
              dispatch(generateText(Difficulty));
              dispatch(resetAnalytics());
              dispatch(setKeyPressed(""));
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
