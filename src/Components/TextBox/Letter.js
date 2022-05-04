import React from "react";
import { useSelector } from "react-redux";

export default function Letter({ wordindex, letterindex, letter }) {
  const { cursor } = useSelector((state) => state.textbox);
  const { isFocused } = useSelector((state) => state.textbox);
  const { isEnded } = useSelector((state) => state.timer);
  const { typedArray } = useSelector((state) => state.textbox);
  return (
    <span
      className={`${isFocused ? "Letter" : "Letter--Blur"} 
      ${
        cursor.word === wordindex &&
        cursor.letter === letterindex &&
        isFocused &&
        !isEnded
          ? "Letter--Active"
          : ""
      } 
      ${
        typedArray[wordindex][letterindex].untyped === false
          ? ""
          : "Letter--typed"
      }      
      ${
        isFocused && typedArray[wordindex][letterindex].incorrect === true
          ? "Letter--Incorrect"
          : ""
      }
      `}
      id={`Word_${wordindex}Letter_${letterindex}`}
      key={`Word_${wordindex}Letter_${letterindex}`}
    >
      {letter}
    </span>
  );
}
