import { playGame } from '../index.js';
import generateNumber from '../utilities.js';

const findGCD = (firstNum, secondNum) => {
  const min = Math.min(firstNum, secondNum);
  const max = Math.max(firstNum, secondNum);
  if (min === 0) {
    return max;
  }
  return findGCD(min, max % min);
};

const getQuestionAndCorrectAnswer = () => {
  const firstNum = generateNumber();
  const secondNum = generateNumber();
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = `${findGCD(firstNum, secondNum)}`;

  return { question, correctAnswer };
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export default () => playGame(gameDescription, getQuestionAndCorrectAnswer);
