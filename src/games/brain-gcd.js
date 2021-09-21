#!/usr/bin/env node
import { playGame, getRandom } from '../game-engine.js';

const quest1 = 'Find the greatest common divisor of given numbers.';

const calcGCD = (numO, numT) => {
  let num1 = numO;
  let num2 = numT;
  while (num1 > 0 && num2 > 0) {
    if (num1 === num2) {
      return String(num1);
    }
    if (num1 > num2) {
      num1 %= num2;
      if (num1 % (num1 + num2) === 0 && num2 % (num1 + num2) === 0) {
        return String(num1 + num2);
      }
    } else if (num1 < num2) {
      num2 %= num1;
      if (num1 % (num1 + num2) === 0 && num2 % (num1 + num2) === 0) {
        return String(num1 + num2);
      }
    }
  }
  return 0;
};

export const makeRound = () => {
  const num1 = Math.floor(getRandom(100, 1));
  const num2 = Math.floor(getRandom(100, 1));
  const question = `${num1} ${num2}`;
  const answer = calcGCD(num1, num2);
  return [question, answer];
};

export default () => playGame(quest1, makeRound);
