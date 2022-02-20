import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { tick } from "State/Features/TimerSlice";
import Spotify from "./Spotify";
import "./Timer.css";

export default function Timer() {
  const dispatch = useDispatch();
  const IsTestMode = useSelector((state) => state.settings.IsTestMode);
  const timeLimit = useSelector((state) => state.timer.timeLeft);
  const isActive = useSelector((state) => state.timer.isActive);
  const isEnded = useSelector((state) => state.timer.isEnded);

  React.useEffect(() => {
    if (isActive && !isEnded) {
      const timerId = setInterval(() => dispatch(tick()), 1000);
      return () => clearInterval(timerId);
    }
  }, [isActive, isEnded, dispatch]);

  return (
    <div className="Timer">
      {
        IsTestMode ? (
          <div className="Button Button--Active">
            Time Left : {timeLimit.minutes}m {timeLimit.seconds}s
          </div>
        ) : (
          <Spotify />
        ) // Show Spotify Player In Practice
      }
    </div>
  );
}
