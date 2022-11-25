import React from "react";
import { connect } from "react-redux";

function Errors({ errors, isEnded }) {
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

const mapStateToProps = (state) => {
  return {
    errors: state.analytics.errors,
    isEnded: state.timer.isEnded,
  };
};

export default connect(mapStateToProps)(Errors);
