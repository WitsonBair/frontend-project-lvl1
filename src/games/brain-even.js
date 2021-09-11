#!/usr/bin/env node
import { playGame } from '../game-engine.js';
import { getRandom } from '../game-engine.js';

const quest1 = 'Answer "yes" if the number is even, otherwise answer "no".';

export const makeRound = () => {
  let num = getRandom(100, 0);
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

export default () => playGame(quest1, makeRound());

/*
import { playGame } from '../game-engine.js';
import { getRandom } from '../game-engine.js';

const GAME_RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const makeRound = () => {
  const question = getRandom(100, 0);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => playGame(GAME_RULE, makeRound);
*/