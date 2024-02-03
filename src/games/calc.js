import { getRandomNumber, playGame } from '../index.js';

const getRandomExpression = (randomOperator, firstNumber, secondNumber) => {
  const result = {};
  let gameTask;
  let correctAnswer;

  if (randomOperator === 0) {
    gameTask = ` ${firstNumber} + ${secondNumber}`;
    correctAnswer = `${firstNumber + secondNumber}`;
  }

  if (randomOperator === 1) {
    gameTask = ` ${firstNumber} - ${secondNumber}`;
    correctAnswer = `${firstNumber - secondNumber}`;
  }

  if (randomOperator === 2) {
    gameTask = ` ${firstNumber} * ${secondNumber}`;
    correctAnswer = `${firstNumber * secondNumber}`;
  }

  result.gameTask = gameTask;
  result.correctAnswer = correctAnswer;
  return result;
};

const taskAnswerRule = {};

const getTaskAndCorrectAnswer = () => {
  const randomOperator = getRandomNumber(0, 2);
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);

  const randomExpression = getRandomExpression(randomOperator, firstNumber, secondNumber);

  taskAnswerRule.gameTask = randomExpression.gameTask;
  taskAnswerRule.correctAnswer = randomExpression.correctAnswer;
  taskAnswerRule.ruleOfGame = 'What is the result of the expression?';

  return taskAnswerRule;
};

export default () => playGame(getTaskAndCorrectAnswer);
