import { playGame, getRandom } from '../game-engine.js';

const quest1 = 'What number is missing in the progression?';

const makeAnArray = () => {
  let num = getRandom(100, 1);
  const plusProg = getRandom(10, 1);
  const arr = [num];
  for (let i = 0; i < 9; i += 1) {
    num += plusProg;
    arr.push(num);
  }
  return arr;
};

const arrRand = () => {
  const num = getRandom(9, 0);
  return num;
};

export const makeRound = () => {
  const arr = makeAnArray();
  const index = arrRand();
  const answer = String(arr[index]);
  arr[index] = '..';
  const question = `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]} ${arr[6]} ${arr[7]} ${arr[8]} ${arr[9]}`;
  return [question, answer];
};

export default () => playGame(quest1, makeRound);
