import { getRandomNumber, playGame } from '../index.js';

const operators = ['+', '-', '*'];

const calculate = (firstNumber, secondNumber, randomOperator) => {
  switch(randomOperator) {
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

const getRandomOperator = (operators) => {
  const randomOperator = getRandomNumber(0, operators.length - 1);
  return operators[randomOperator];
};

const getQuestionAndCorrectAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const randomOperator = getRandomOperator(operators);

  const correctAnswer = calculate(firstNumber, secondNumber, randomOperator);

  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;

  return { question, correctAnswer };
};

const gameDescription = 'What is the result of the expression?';

export default () => playGame(gameDescription, getQuestionAndCorrectAnswer);
