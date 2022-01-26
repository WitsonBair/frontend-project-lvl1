import { playGame, getRandom } from '../game-engine.js';

const quest1 = 'What number is missing in the progression?';

const makeAnArray = () => {
  let first = getRandom(100, 1);
  const step = getRandom(10, 1);
  const arr = [first];
  //val = first + i * step - не могу понять для чего усложнять
  for (let i = 0; i < 9; i += 1) {
    first += step;
    arr.push(first);
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
  //const question = `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]} ${arr[6]} ${arr[7]} ${arr[8]} ${arr[9]}`;
  const question = arr.join(" ");
  return [question, answer];
};

export default () => playGame(quest1, makeRound);
