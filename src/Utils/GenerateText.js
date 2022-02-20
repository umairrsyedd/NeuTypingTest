export default function GenerateText(Text) {
  const randomWords = [];
  for (let i = 0; i < 30; i++) {
    const randomIndex = Math.floor(Math.random() * Text.length);
    randomWords.push(Text[randomIndex]);
  }
  return randomWords;
}
