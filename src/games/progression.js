import { getRandomNumber, playGame } from '../index.js';

const progression = (firstNumber, step, miss, progressionLength) => {
  let gameTask = '';
  for (let n = 1; n <= progressionLength; n += 1) {
    if (n === miss) {
      gameTask = `${gameTask} ..`;
    } else {
      gameTask = `${gameTask} ${firstNumber + step * n}`;
    }
  }
  return gameTask;
};

const taskAnswerRule = {};

const getTaskAndCorrectAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const progressionLength = 10;
  const step = getRandomNumber(1, 10);
  const miss = getRandomNumber(1, 10);

  const gameTask = progression(firstNumber, step, miss, progressionLength);

  const correctAnswer = `${firstNumber + step * miss}`;

  taskAnswerRule.gameTask = gameTask;
  taskAnswerRule.correctAnswer = correctAnswer;
  taskAnswerRule.ruleOfGame = 'What number is missing in the progression?';

  return taskAnswerRule;
};

export default () => playGame(getTaskAndCorrectAnswer);
