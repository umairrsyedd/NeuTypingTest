import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ReactComponent as KeyboardLight } from "Assets/KeyboardLight.svg";
import { ReactComponent as KeyboardDark } from "Assets/KeyboardDark.svg";
import "./Keyboard.css";

function Keyboard({ keyPressed, DarkUI }) {
  useEffect(() => {}, [keyPressed, DarkUI]);

  return (
    <div className="Keyboard">
      {DarkUI ? <KeyboardDark /> : <KeyboardLight />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    keyPressed: state.keyboard.keyPressed,
    DarkUI: state.settings.DarkUI,
  };
};

export default connect(mapStateToProps)(Keyboard);
