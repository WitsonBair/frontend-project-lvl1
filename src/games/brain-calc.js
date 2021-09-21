#!/usr/bin/env node
import { playGame, getRandom } from '../game-engine.js';

const quest1 = 'What is the result of the expression?';

const makeCalc = (index, num1, num2) => {
  const calc = {
    0(a, b) { return a + b; },
    1(a, b) { return a - b; },
    2(a, b) { return a * b; },
  };
  const result = calc[index](num1, num2);
  return String(result);
};

export const makeRound = () => {
  const operations = ['+', '-', '*'];
  const index = getRandom(2, 0);
  const num1 = getRandom(100, 1);
  const num2 = getRandom(100, 1);
  const question = `Question: ${num1} ${operations[index]} ${num2}`;
  const answer = makeCalc(index, num1, num2);
  return [question, answer];
};

export default () => playGame(quest1, makeRound);
