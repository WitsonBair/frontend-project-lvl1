#!/usr/bin/env node
import { playGame, getRandom } from '../game-engine.js';

const quest1 = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num1) => {
  let check = true;
  let result = '';
  const primeNumbers = [2, 3, 5, 7];
  const answer = [num1].some((el) => primeNumbers.includes(el));
  if (answer) {
    return 'yes';
  }
  if (num1 === 1) {
    return 'no';
  }
  for (let i = 0; i < primeNumbers.length; i += 1) {
    if (num1 % primeNumbers[i] === 0) {
      check = false;
    }
  }
  if (check === true) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

export const makeRound = () => {
  const num1 = getRandom(100, 1);
  const question = `${num1}`;
  const answer = isPrimeNumber(num1);
  return [question, answer];
};

export default () => playGame(quest1, makeRound);
