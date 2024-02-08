import { getRandomNumber, playGame } from '../index.js';

const findGCD = (firstNum, secondNum) => {
  const min = Math.min(firstNum, secondNum);
  const max = Math.max(firstNum, secondNum);
  if (min === 0) {
    return max;
  }
  return findGCD(min, max % min);
};

const getQuestionAndCorrectAnswer = () => {
  const firstNum = getRandomNumber(1, 100);
  const secondNum = getRandomNumber(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = `${findGCD(firstNum, secondNum)}`;

  return { question, correctAnswer };
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export default () => playGame(gameDescription, getQuestionAndCorrectAnswer);
