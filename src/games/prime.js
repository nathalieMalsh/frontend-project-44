import { playGame } from '../index.js';
import generateNumber from '../utilities.js';

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

const getQuestionAndCorrectAnswer = () => {
  const randomNumber = generateNumber();
  const question = `${randomNumber}`;
  const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => playGame(gameDescription, getQuestionAndCorrectAnswer);
