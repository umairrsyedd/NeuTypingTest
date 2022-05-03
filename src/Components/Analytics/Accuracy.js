import React from "react";
import { useSelector } from "react-redux";

export default function Accuracy() {
  const accuracy = useSelector((state) => state.analytics.accuracy);
  const isEnded = useSelector((state) => state.timer.isEnded);

  return (
    <div
      className={`Button Button--Analytics ${
        isEnded ? "Button--Inactive" : "Button--Active"
      }
      `}
    >
      Accuracy : {accuracy === "NaN" ? 0.0 : accuracy}%
    </div>
  );
}
