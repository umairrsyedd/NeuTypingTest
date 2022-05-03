import React from "react";
import Accuracy from "./Accuracy";
import Speed from "./Speed";
import Errors from "./Errors";
import { useSelector } from "react-redux";
import "./Analytics.css";
import Timer from "Components/Timer/Timer";
export default function Analytics() {
  const isTestMode = useSelector((state) => state.settings.IsTestMode);
  return (
    <>
      <div
        className={`Analytics ${
          isTestMode ? "Analytics__Test" : "Analytics__Practice"
        }`}
      >
        <div className="Analytics--Left">
          <Speed />
          <Accuracy />
          <Errors />
        </div>
        <Timer />
      </div>
    </>
  );
}
