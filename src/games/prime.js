import { getRandomNumber, greeting, round, isCorrect, playGame } from '../index.js';
import {cons, car, cdr, toString, isPair} from '@hexlet/pairs';

let userName = greeting();

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const getRandomNumForTask = () => {
  const randomNumber = getRandomNumber(1, 100);
  const gameTask = `${randomNumber}`;
  const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no';
  return cons(gameTask, correctAnswer);
};

const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => playGame(getRandomNumForTask, userName, ruleOfGame);