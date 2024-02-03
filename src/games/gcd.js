import { getRandomNumber, playGame } from '../index.js';

const findGCD = (firstNum, secondNum) => {
  const min = Math.min(firstNum, secondNum);
  const max = Math.max(firstNum, secondNum);
  if (min === 0) {
    return max;
  }
  return findGCD(min, max % min);
};

const taskAnswerRule = {};

const getTaskAndCorrectAnswer = () => {
  const firstNum = getRandomNumber(1, 100);
  const secondNum = getRandomNumber(1, 100);
  const gameTask = ` ${firstNum} ${secondNum}`;
  const correctAnswer = `${findGCD(firstNum, secondNum)}`;

  taskAnswerRule.gameTask = gameTask;
  taskAnswerRule.correctAnswer = correctAnswer;
  taskAnswerRule.ruleOfGame = 'Find the greatest common divisor of given numbers.';

  return taskAnswerRule;
};

export default () => playGame(getTaskAndCorrectAnswer);
