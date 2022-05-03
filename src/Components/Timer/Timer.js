import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { tick } from "State/Features/TimerSlice";
import { changeSpeed, changeAccuracy } from "State/Features/AnalyticsSlice";
import "./Timer.css";

export default function Timer() {
  const dispatch = useDispatch();
  const IsTestMode = useSelector((state) => state.settings.IsTestMode);
  const timeLimit = useSelector((state) => state.timer.timeLeft);
  const isActive = useSelector((state) => state.timer.isActive);
  const isEnded = useSelector((state) => state.timer.isEnded);
  const secondsUsed = useSelector((state) => state.timer.secondsUsed);
  const hasStarted = useSelector((state) => state.timer.hasStarted);

  React.useEffect(() => {
    if (isActive && !isEnded && hasStarted && IsTestMode) {
      const timerId = setInterval(function tickChange() {
        dispatch(tick());
        if (secondsUsed === 0) {
          return;
        }
        dispatch(changeSpeed(secondsUsed));
        dispatch(changeAccuracy());
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [isActive, isEnded, secondsUsed, hasStarted, dispatch]);

  return (
    <div className="Timer">
      {IsTestMode ? (
        <>
          <div
            className="Button Button--Active Timer__Box"
            data-tip="Time Left on the Clock"
          >
            <span>Time Left </span>
            <span
              className={`Timer__Time ${
                timeLimit.minutes == 0 && timeLimit.seconds < 10 && !isEnded
                  ? "Timer__Time--Ending"
                  : ""
              }`}
            >
              {timeLimit.minutes}m {timeLimit.seconds}s
            </span>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
