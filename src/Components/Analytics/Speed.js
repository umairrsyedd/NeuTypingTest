import React from "react";
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";

export default function Speed() {
  const speed = useSelector((state) => state.analytics.speed);
  const IsTestMode = useSelector((state) => state.settings.IsTestMode);
  const isEnded = useSelector((state) => state.timer.isEnded);
  return IsTestMode ? (
    <>
      <ReactTooltip textColor="#f5f0f0" backgroundColor="#26243d" />
      <div
        className={`Button Button--Analytics ${
          isEnded ? "Button--Inactive" : "Button--Active"
        }`}
        data-tip="Words Per Minute"
      >
        Speed : {speed === "NaN" ? 0 : Math.round(speed)} WPM
      </div>
    </>
  ) : null;
}
