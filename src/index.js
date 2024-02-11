import readlineSync from 'readline-sync';

const roundCount = 3;

const playGame = (gameDescription, getQuestionAndCorrectAnswer) => {
  const userName = readlineSync.question('Welcome to the Brain Games! May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < roundCount; i += 1) {
    const gameSet = getQuestionAndCorrectAnswer();
    const { question, correctAnswer } = gameSet;
    const userAnswer = readlineSync.question(`${gameDescription} Question: ${question}\nYour answer:`);

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
