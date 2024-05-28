import { EasyWords } from "Data/EasyWords";
import { MediumWords } from "Data/MediumWords";
import { HardWords } from "Data/HardWords";

export default function GenerateText(Difficulty) {
  const randomWords = [];
  switch (Difficulty) {
    case "Easy":
      for (let i = 0; i < 18; i++) {
        const randomIndex = Math.floor(Math.random() * EasyWords.length);
        randomWords.push(EasyWords[randomIndex]);
      }
      // Push 7 Medium words
      for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * MediumWords.length);
        randomWords.push(MediumWords[randomIndex]);
      }
      // Push 3 Hard Words
      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * HardWords.length);
        randomWords.push(HardWords[randomIndex]);
      }
      break;
    case "Medium":
      // Push 7 Easy Words, then 5 Medium Words, then 5 Hard Words
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * EasyWords.length);
        randomWords.push(EasyWords[randomIndex]);
      }
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * MediumWords.length);
        randomWords.push(MediumWords[randomIndex]);
      }
      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * HardWords.length);
        randomWords.push(HardWords[randomIndex]);
      }
      break;
    case "Hard":
      // Push 7 Easy Words, then 7 Medium Words, then 7 Hard Words
      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * EasyWords.length);
        randomWords.push(EasyWords[randomIndex]);
      }
      for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * MediumWords.length);
        randomWords.push(MediumWords[randomIndex]);
      }
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * HardWords.length);
        randomWords.push(HardWords[randomIndex]);
      }
      break;
    default: {
      for (let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * EasyWords.length);
        randomWords.push(EasyWords[randomIndex]);
      }
      // Push 7 Medium words
      for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * MediumWords.length);
        randomWords.push(MediumWords[randomIndex]);
      }
      // Push 3 Hard Words
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * HardWords.length);
        randomWords.push(HardWords[randomIndex]);
      }
    }
  }
  randomWords.sort(() => Math.random() - 0.5);
  MakeTypedArray(randomWords);
  return randomWords;
}

export function MakeTypedArray(words) {
  const typed = [];
  for (let i = 0; i < words.length; i++) {
    typed.push([]);
    for (let j = 0; j < words[i].length; j++) {
      typed[i].push({
        untyped: true,
        correct: false,
        incorrect: false,
      });
    }
  }
  return typed;
}
