import React from "react";
import "./Keyboard.css";
import { ReactComponent as KeyboardSVG } from "Assets/Keyboard.svg";
export default function Keyboard({ keyPressed }) {
  return (
    <div className="Keyboard">
      <KeyboardSVG />
    </div>
  );
}
