import Modes from "./Modes.js";
import TimeLimit from "./TimeLimit.js";
import Difficulty from "./Difficulty.js";
import Options from "./Options.js";
import "./Settings.css";

export default function Settings() {
  return (
    <>
      <div className="Settings">
        <Modes />
        <TimeLimit />
        <Difficulty />
        <Options />
      </div>
    </>
  );
}
