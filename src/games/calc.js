import { getRandomNumber, greeting, round, isCorrect, playGame } from '../index.js';
import {cons, car, cdr, toString, isPair} from '@hexlet/pairs';

let userName = greeting();

const getRandomExpression = () => {
    const randomOperator = getRandomNumber(0, 2);
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    let correctAnswer;
    let gameTask;

    if (randomOperator === 0) {
        gameTask = `${firstNumber} + ${secondNumber}`;
        correctAnswer = `${firstNumber + secondNumber}`;
    }

    if (randomOperator === 1) {
        gameTask = `${firstNumber} - ${secondNumber}`;
        correctAnswer = `${firstNumber - secondNumber}`;
    }

    if (randomOperator === 2) {
        gameTask = `${firstNumber} * ${secondNumber}`;
        correctAnswer = `${firstNumber * secondNumber}`;
    }

    return cons(gameTask, correctAnswer);
};


export default () => playGame(getRandomExpression, userName);
