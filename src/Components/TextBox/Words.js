import React from "react";
export default function Words({ text }) {
  return text.map((word, wordindex) => {
    return (
      <span className="Word" id={`Word_${wordindex}`}>
        {Array.from(word).map((letter, letterindex) => {
          return (
            <span
              className="Letter"
              id={`Word_${wordindex}Letter_${letterindex}`}
            >
              {letter}
            </span>
          );
        })}
      </span>
    );
  });
}
