export default function AddClasses(cursor, classesToAdd) {
  let word = cursor.word;
  let letter = cursor.letter;
  classesToAdd.forEach((classToAdd) => {
    if (document.getElementById(`Word_${word}Letter_${letter}`)) {
      document
        .getElementById(`Word_${word}Letter_${letter}`)
        .classList.add(`${classToAdd}`);
    }
  });
}
