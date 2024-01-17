import readlineSync from 'readline-sync';

const isEven = number => (number % 2 === 0);

const getNumber = () => {
  const randomNumber = Math.floor(Math.random()*101);
  return randomNumber;
};

const round = () => {
  const numberForGame = getNumber();
  const correctAnswer = (isEven(numberForGame)) ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no". Question: ${numberForGame} Your answer: `);
  
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. `);
    return false;
  };
};

const playGame = () => {
const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
  for (let i = 0; i < 3; i++) {
    const isCorrect = round();
    if (!isCorrect) {
      return;
    };
  };
  console.log(`Congratulations, ${userName}!`);
};

playGame();
