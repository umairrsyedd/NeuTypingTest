export function highlightCorrectKey(keyPressed) {
  let key = keyPressed.toUpperCase();
  if (key === " ") {
    key = "Space";
  }
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
  if (key === " ") {
    key = "Space";
  }
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
  } catch (e) {
    console.log(e);
  }
}

export function highlightSpecialKey(keyPressed) {
  let key = keyPressed.toUpperCase();
  console.log("Reached Special " + key);
  try {
    if (key === "CAPSLOCK") {
      document
        .querySelector("#Box_Caps>rect")
        .classList.add("highlight--special");
    } else if (key === "SHIFT") {
      document
        .querySelector("#Box_Shift_L>rect")
        .classList.add("highlight--special");
    }
  } catch (e) {
    console.log(e);
  }
}

export function removeHighlightSpecialKey(keyPressed) {
  let key = keyPressed.toUpperCase();

  try {
    if (key === "CAPSLOCK") {
      document
        .querySelector("#Box_Caps>rect")
        .classList.remove("highlight--special");
    } else if (key === "SHIFT") {
      document
        .querySelector("#Box_Shift_L>rect")
        .classList.remove("highlight--special");
    }
  } catch (e) {
    console.log(e);
  }
}
