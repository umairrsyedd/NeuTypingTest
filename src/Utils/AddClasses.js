export default function AddClasses(current, classesToAdd) {
    let word = current.Word
    let letter = current.Letter
    classesToAdd.forEach(classToAdd => {
        if (document.getElementById(`Word_${word}Letter_${letter}`)) {
            document.getElementById(`Word_${word}Letter_${letter}`).classList.add(`${classToAdd}`)
        }
    })
}