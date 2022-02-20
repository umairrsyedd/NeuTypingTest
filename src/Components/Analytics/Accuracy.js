import React from "react";
import { useSelector } from "react-redux";

export default function Accuracy() {
  const accuracy = useSelector((state) => state.analytics.accuracy);
  return (
    <div className="Button Button--Active">
      Accuracy : {accuracy === "NaN" ? 0 : accuracy}%
    </div>
  );
}
