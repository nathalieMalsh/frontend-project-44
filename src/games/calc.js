import { playGame } from '../index.js';
import generateNumber from '../utilities.js';

const operators = ['+', '-', '*'];

const calculate = (firstNumber, secondNumber, randomOperator) => {
  switch (randomOperator) {
    case '+':
      return `${firstNumber + secondNumber}`;
    case '-':
      return `${firstNumber - secondNumber}`;
    case '*':
      return `${firstNumber * secondNumber}`;
    default:
      throw new Error('Unknown state!');
  }
};

const getRandomOperator = (collOfOperators) => {
  const randomOperator = generateNumber(0, collOfOperators.length - 1);
  return collOfOperators[randomOperator];
};

const getQuestionAndCorrectAnswer = () => {
  const firstNumber = generateNumber();
  const secondNumber = generateNumber();
  const randomOperator = getRandomOperator(operators);

  const correctAnswer = calculate(firstNumber, secondNumber, randomOperator);

  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;

  return { question, correctAnswer };
};

const gameDescription = 'What is the result of the expression?';

export default () => playGame(gameDescription, getQuestionAndCorrectAnswer);
