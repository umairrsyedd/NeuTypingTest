import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as KeyboardLight } from "Assets/KeyboardLight.svg";
import { ReactComponent as KeyboardDark } from "Assets/KeyboardDark.svg";
import "./Keyboard.css";

export default function Keyboard() {
  const keyPressed = useSelector((state) => state.keyboard.keyPressed);
  const DarkUI = useSelector((state) => state.settings.DarkUI);
  useEffect(() => {}, [keyPressed, DarkUI]);

  return (
    <div className="Keyboard">
      {DarkUI ? <KeyboardDark /> : <KeyboardLight />}
    </div>
  );
}
