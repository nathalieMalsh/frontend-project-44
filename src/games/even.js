import { getRandomNumber, playGame } from '../index.js';

const isEven = (number) => (number % 2 === 0);

let taskAnswerRule = {};

const getTaskAndCorrectAnswer = () => {
  const randomNumber = getRandomNumber(1, 100);
  const gameTask = ` ${randomNumber}`;
  const correctAnswer = (isEven(randomNumber)) ? 'yes' : 'no';

  taskAnswerRule['gameTask'] = gameTask;
  taskAnswerRule['correctAnswer'] = correctAnswer;
  taskAnswerRule['ruleOfGame'] = 'Answer "yes" if number even, otherwise answer "no".';

  return taskAnswerRule;
};

export default () => playGame(getTaskAndCorrectAnswer);
