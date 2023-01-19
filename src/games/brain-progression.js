import { playGame, getRandomNumber } from '../game-engine.js';

const quest1 = 'What number is missing in the progression?';

const makeAnArray = () => {
  const first = getRandomNumber(100, 1);
  const step = getRandomNumber(10, 1);
  const arr = [];
  for (let i = 0; i < 9; i += 1) {
    arr.push(first + i * step);
  }
  return arr;
};

const arrRand = () => {
  const num = getRandomNumber(9, 0);
  return num;
};

export const makeRound = () => {
  const arr = makeAnArray();
  const index = arrRand();
  const answer = String(arr[index]);
  arr[index] = '..';
  const question = arr.join(' ');
  return [question, answer];
};

makeAnArray();

export default () => playGame(quest1, makeRound);
