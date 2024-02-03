import { getRandomNumber, playGame } from '../index.js';

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

const taskAnswerRule = {};

const getTaskAndCorrectAnswer = () => {
  const randomNumber = getRandomNumber(1, 100);
  const gameTask = ` ${randomNumber}`;
  const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no';

  taskAnswerRule.gameTask = gameTask;
  taskAnswerRule.correctAnswer = correctAnswer;
  taskAnswerRule.ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  return taskAnswerRule;
};

export default () => playGame(getTaskAndCorrectAnswer);
