import React from "react";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";

function Speed({ isTestMode, speed, isEnded }) {
  return isTestMode ? (
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

const mapStateToProps = (state) => {
  return {
    speed: state.analytics.speed,
    isEnded: state.timer.isEnded,
    isTestMode: state.settings.IsTestMode,
  };
};

export default connect(mapStateToProps)(Speed);
