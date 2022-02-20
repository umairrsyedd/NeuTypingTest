import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTimeLimit } from "State/Features/TimerSlice";

export default function TimeLimit() {
  const TimeLimit = useSelector((state) => state.timer.timeLeft.minutes);
  const IsTestMode = useSelector((state) => state.settings.IsTestMode);
  const dispatch = useDispatch();
  return (
    <div className="Settings--Time">
      {
        IsTestMode ? (
          <>
            <button
              className={`Button ${TimeLimit === 1 ? "Button--Active" : "Button--Inactive"
                }`}
              onClick={() => dispatch(setTimeLimit(1))}
            >
              1m
            </button>
            <button
              className={`Button ${TimeLimit === 3 ? "Button--Active" : "Button--Inactive"
                }`}
              onClick={() => dispatch(setTimeLimit(3))}
            >
              3m
            </button>
            <button
              className={`Button ${TimeLimit === 5 ? "Button--Active" : "Button--Inactive"
                }`}
              onClick={() => dispatch(setTimeLimit(5))}
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
