#!/usr/bin/env node
import { playGame, getRandom } from '../game-engine.js';

const quest1 = 'Answer "yes" if the number is even, otherwise answer "no".';

export const makeRound = () => {
  const num = getRandom(100, 0);
  let check = false;
  let result = '';
  if (num % 2 === 0) {
    check = true;
  } else if (num % 2 !== 0) {
    check = false;
  }
  if (check === true) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return [num, result];
};

export default () => playGame(quest1, makeRound);
