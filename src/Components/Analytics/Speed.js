import React from "react";
import { useSelector } from "react-redux";

export default function Speed() {
  const speed = useSelector((state) => state.analytics.speed);
  const IsTestMode = useSelector((state) => state.settings.IsTestMode);
  return (
    IsTestMode ? (
      <div className="Button Button--Active">
        Speed : {speed === "NaN" ? 0 : speed} WPM
      </div>
    )
      : null
  );
}
