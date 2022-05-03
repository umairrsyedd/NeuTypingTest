export function highlightCorrectKey(keyPressed) {
  let key = keyPressed.toUpperCase();
  key === "␣" ? (key = "Space") : (key = key);
  try {
    if (document.querySelector(`#Box_${key}>rect`)) {
      document
        .querySelector(`#Box_${key}>rect`)
        .classList.add("highlight--correct");
      document
        .querySelector(`#Text_${key}`)
        .classList.add("highlight--correct--text");
      setTimeout(() => {
        document
          .querySelector(`#Box_${key}>rect`)
          .classList.remove("highlight--correct");
        document
          .querySelector(`#Text_${key}`)
          .classList.remove("highlight--correct--text");
      }, 100);
    }
  } catch {
    console.log("error");
  }
}

export function highlightIncorrectKey(keyPressed) {
  let key = keyPressed.toUpperCase();
  key === "␣" ? (key = "Space") : (key = key);
  try {
    if (document.querySelector(`#Box_${key}>rect`)) {
      document
        .querySelector(`#Box_${key}>rect`)
        .classList.add("highlight--incorrect");
      document
        .querySelector(`#Text_${key}`)
        .classList.add("highlight--correct--text");
      setTimeout(() => {
        document
          .querySelector(`#Box_${key}>rect`)
          .classList.remove("highlight--incorrect");
        document
          .querySelector(`#Text_${key}`)
          .classList.remove("highlight--correct--text");
      }, 100);
    }
  } catch {
    console.log("error");
  }
}
