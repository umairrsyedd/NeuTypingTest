import React from "react";
import { useSelector } from "react-redux";

export default function Errors() {
  const errors = useSelector((state) => state.analytics.errors);
  const isEnded = useSelector((state) => state.timer.isEnded);
  return (
    <div
      className={`Button Button--Analytics ${
        isEnded ? "Button--Inactive" : "Button--Active"
      }`}
    >
      Errors : {errors}
    </div>
  );
}
