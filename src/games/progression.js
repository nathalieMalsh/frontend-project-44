import { cons } from '@hexlet/pairs';
import { getRandomNumber, greeting, playGame } from '../index.js';

const userName = greeting();

const getRandomProgression = () => {
  const start = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 10);
  const miss = getRandomNumber(1, 10);
  let gameTask = '';
  for (let n = 1; n <= 10; n += 1) {
    if (n === miss) {
      gameTask = `${gameTask} ..`;
    } else {
    gameTask = `${gameTask} ${start + step * n}`;
      }
  }
  const correctAnswer = `${start + step * miss}`;
  return cons(gameTask, correctAnswer);
};

const ruleOfGame = 'What number is missing in the progression?';

export default () => playGame(getRandomProgression, userName, ruleOfGame);
