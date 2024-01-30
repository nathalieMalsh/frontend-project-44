import { cons } from '@hexlet/pairs';
import { getRandomNumber, greeting, playGame } from '../index.js';

const userName = greeting();

const findGCD = (firstNum, secondNum) => {
  const min = Math.min(firstNum, secondNum);
  const max = Math.max(firstNum, secondNum);
  if (min === 0) {
    return max;
  }
  return findGCD(min, max % min);
};

const getRandomNumberPair = () => {
  const firstNum = getRandomNumber(1, 100);
  const secondNum = getRandomNumber(1, 100);
  const gameTask = ` ${firstNum} ${secondNum}`;
  const correctAnswer = `${findGCD(firstNum, secondNum)}`;
  return cons(gameTask, correctAnswer);
};

const ruleOfGame = 'Find the greatest common divisor of given numbers.';

export default () => playGame(getRandomNumberPair, userName, ruleOfGame);
