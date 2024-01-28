import { getRandomNumber, greeting, round, isCorrect, playGame } from '../index.js';
import {cons, car, cdr, toString, isPair} from '@hexlet/pairs';

let userName = greeting();

const getRandomProgression = () => {
  const start = getRandomNumber( 1, 100);
  const step = getRandomNumber(1, 10);
  let nextNum = start;
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
