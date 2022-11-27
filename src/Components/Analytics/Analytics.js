import React from "react";
import { connect } from "react-redux";
import Accuracy from "./Accuracy";
import Speed from "./Speed";
import Errors from "./Errors";
import Timer from "Components/Timer/Timer";
import "./Analytics.css";

function Analytics({ isTestMode }) {
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

const mapStateToProps = (state) => {
  return {
    isTestMode: state.settings.IsTestMode,
  };
};

export default connect(mapStateToProps)(Analytics);
