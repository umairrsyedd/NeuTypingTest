import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementLetter,
  decrementLetter,
} from "State/Features/TextboxSlice.js";
import {
  incrementError
} from "State/Features/AnalyticsSlice.js";
import { startTimer } from "State/Features/TimerSlice.js";
import Words from "./Words.js";
import AddClasses from "Utils/AddClasses.js";
import RemoveClasses from "Utils/RemoveClasses.js";
import "./TextBox.css";

export default function TextBox() {
  const dispatch = useDispatch();
  const { text, cursor, isTextEnd } = useSelector((state) => state.textbox);
  const { word, letter } = cursor;
  const { isActive, isEnded } = useSelector((state) => state.timer);

  const handleKeyPress = ({ key }) => {
    if (isEnded) {
      return;
    }
    if (!isActive) {
      dispatch(startTimer());
    }
    if (isTextEnd) {
      return;
    }
    if (key === " ") {
      key = "␣";
    }
    if (key === "Backspace") {
      dispatch(decrementLetter());

    }
    if (key === text[word][letter]) {
      if (word === text.length - 1 && letter === text[word].length - 1) {
        // set text end
      }
      dispatch(incrementLetter());
      AddClasses(cursor, ["Letter--Correct"]);

    } else {
      dispatch(incrementError());
      AddClasses(cursor, ["Letter--Wrong"]);
    }
  };

  return (
    <div
      className="Button TextBox"
      tabIndex="0"
      onKeyPress={(e) => {
        handleKeyPress(e);
      }}
    >
      <Words text={text} />
    </div>
  );
}
