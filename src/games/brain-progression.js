import playGame from '../game-engine.js';
import getRandomNumber from '../get-random-number.js'

const quest1 = 'What number is missing in the progression?';

const makeAnArray = (progressionNumber, first, step) => {
  const arr = [];
  for (let i = 0; i < progressionNumber; i += 1) {
    arr.push(first + i * step);
  }
  return arr;
};

export const makeRound = () => {
  const progressionNumber = getRandomNumber(20, 10);
  const index = getRandomNumber(progressionNumber, 0);
  const first = getRandomNumber(100, 1);
  const step = getRandomNumber(10, 1);
  const arr = makeAnArray(progressionNumber, first, step);
  const answer = String(arr[index]);
  arr[index] = '..';
  const question = arr.join(' ');
  return [question, answer];
};

export default () => playGame(quest1, makeRound);
