import React from "react";
import { connect } from "react-redux";

function Accuracy({ accuracy, isEnded }) {
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

const mapStateToProps = (state) => {
  return {
    accuracy: state.analytics.accuracy,
    isEnded: state.timer.isEnded,
  };
};

export default connect(mapStateToProps)(Accuracy);
