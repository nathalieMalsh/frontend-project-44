import readlineSync from 'readline-sync';
import {cons, car, cdr, toString, isPair} from '@hexlet/pairs';

export const greeting = () => {
  const userName = readlineSync.question('Welcome to the Brain Games! May I have your name? ');
  console.log('Hello, ' + userName + '!');
  return userName;
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const round = (gameTask, ruleOfGame) => {
    const userAnswer = readlineSync.question(`${ruleOfGame} Question:${gameTask}\nYour answer:`);
    return userAnswer;
};

export const isCorrect = (userAnswer, correctAnswer, userName) => {
    if (correctAnswer === userAnswer) {
        console.log('Correct!');
        return true;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
        return false;
      };
};

export const playGame = (gameTaskAndCorrectAnswer, userName, ruleOfGame) => {
    for (let i = 0; i < 3; i+=1) {
      let randomExpression = gameTaskAndCorrectAnswer();
      let gameTask = car(randomExpression);
      let correctAnswer = cdr(randomExpression);
      let userAnswer = round(gameTask, ruleOfGame);

      if (!isCorrect(userAnswer, correctAnswer, userName)) {
        return;
      };
    };
    console.log(`Congratulations, ${userName}!`);
};
