export default function RemoveClasses(current, classesToRemove) {
  let word = current.Word;
  let letter = current.Letter - 1;
  let exists = false;
  classesToRemove.forEach((classToRemove) => {
    if (document.getElementById(`Word_${word}Letter_${letter}`)) {
      exists = true;
    }
    if (
      exists === true &&
      document
        .getElementById(`Word_${word}Letter_${letter}`)
        .classList.contains(classToRemove)
    ) {
      document
        .getElementById(`Word_${word}Letter_${letter}`)
        .classList.remove(`${classToRemove}`);
    }
  });
}
