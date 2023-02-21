import playGame from '../game-engine.js';
import getRandomNumber from '../get-random-number.js';

const description = 'What number is missing in the progression?';

const makeAnArray = (progressionLength, first, step) => {
  const arr = [];
  for (let i = 0; i < progressionLength; i += 1) {
    arr.push(first + i * step);
  }
  return arr;
};

export const makeRound = () => {
  const progressionLength = getRandomNumber(20, 10);
  const index = getRandomNumber(progressionLength, 0);
  const first = getRandomNumber(100, 1);
  const step = getRandomNumber(10, 1);
  const arr = makeAnArray(progressionLength, first, step);
  const answer = String(arr[index]);
  arr[index] = '..';
  const question = arr.join(' ');
  return [question, answer];
};

export default () => playGame(description, makeRound);
