import { React, useEffect } from "react";
import { connect } from "react-redux";
import { tick } from "Components/Timer/TimerSlice";
import {
  changeSpeed,
  changeAccuracy,
} from "Components/Analytics/AnalyticsSlice";
import "./Timer.css";

function Timer({
  IsTestMode,
  timeLimit,
  isActive,
  isEnded,
  secondsUsed,
  hasStarted,
  tick,
  changeSpeed,
  changeAccuracy,
}) {
  useEffect(() => {
    if (isActive && !isEnded && hasStarted && IsTestMode) {
      const timerId = setInterval(() => {
        tick();
        if (secondsUsed === 0) {
          return;
        }
        changeSpeed(secondsUsed);
        changeAccuracy();
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [
    isActive,
    isEnded,
    secondsUsed,
    hasStarted,
    IsTestMode,
    tick,
    changeSpeed,
    changeAccuracy,
  ]);

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
                timeLimit.minutes === 0 && timeLimit.seconds < 10 && !isEnded
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

const mapStateToProps = (state) => {
  return {
    IsTestMode: state.settings.IsTestMode,
    timeLimit: state.timer.timeLeft,
    isActive: state.timer.isActive,
    isEnded: state.timer.isEnded,
    secondsUsed: state.timer.secondsUsed,
    hasStarted: state.timer.hasStarted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tick: () => dispatch(tick()),
    changeSpeed: (secondsUsed) => dispatch(changeSpeed(secondsUsed)),
    changeAccuracy: () => dispatch(changeAccuracy()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
