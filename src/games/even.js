import { playGame } from '../index.js';
import { generateNumber } from '../utilities.js';

const isEven = (number) => (number % 2 === 0);

const getQuestionAndCorrectAnswer = () => {
  const randomNumber = generateNumber();
  const question = `${randomNumber}`;
  const correctAnswer = (isEven(randomNumber)) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => playGame(gameDescription, getQuestionAndCorrectAnswer);
