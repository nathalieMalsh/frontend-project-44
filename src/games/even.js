import { getRandomNumber, playGame } from '../index.js';

const isEven = (number) => (number % 2 === 0);

const getQuestionAndCorrectAnswer = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = (isEven(randomNumber)) ? 'yes' : 'no';
 
  return { question, correctAnswer };
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => playGame(gameDescription, getQuestionAndCorrectAnswer);
