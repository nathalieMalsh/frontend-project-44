import playGame from '../index.js';
import generateNumber from '../utilities.js';

const getProgression = (firstNumber, step, progressionLength) => {
  const progression = [];
  for (let n = 1; n <= progressionLength; n += 1) {
    progression.push(`${firstNumber + step * n}`);
  }
  return progression;
};

const getProgressionWithMiss = (progression, miss) => {
  progression.splice(miss, 1, '..');
  return progression;
};

const getQuestionAndCorrectAnswer = () => {
  const firstNumber = generateNumber();
  const step = generateNumber(1, 10);
  const progressionLength = 10;

  const progression = getProgression(firstNumber, step, progressionLength);

  const miss = generateNumber(0, 9);
  const correctAnswer = progression[miss];
  const progressionWithMiss = getProgressionWithMiss(progression, miss);
  const question = progressionWithMiss.join(' ');

  return { question, correctAnswer };
};

const gameDescription = 'What number is missing in the progression?';

export default () => playGame(gameDescription, getQuestionAndCorrectAnswer);
