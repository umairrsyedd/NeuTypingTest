import Modes from "./Modes.js";
import TimeLimit from "./TimeLimit.js";
import Difficulty from "./Difficulty.js";
import Options from "./Options.js";
import { useSelector } from "react-redux";
import "./Settings.css";

export default function Settings() {
  const isEnded = useSelector((state) => state.timer.isEnded);
  const zenMode = useSelector((state) => state.textbox.zenMode);
  return (
    <>
      {zenMode && !isEnded ? (
        <></>
      ) : (
        <div className="Settings">
          <Modes />
          <TimeLimit />
          <Difficulty />
          <Options />
        </div>
      )}
    </>
  );
}
