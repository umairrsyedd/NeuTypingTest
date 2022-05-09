import React from "react";
import Letter from "./Letter";

export default function Words({ text }) {
  return text.map((word, wordindex) => {
    return (
      <span className="Word" id={`Word_${wordindex}`} key={`Word_${wordindex}`}>
        {Array.from(word).map((letter, letterindex) => {
          return (
            <Letter
              wordindex={wordindex}
              letterindex={letterindex}
              letter={letter}
              key={`Word_${wordindex}Letter_${letterindex}`}
            />
          );
        })}
      </span>
    );
  });
}
