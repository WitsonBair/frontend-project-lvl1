#!/usr/bin/env node
import { engine } from '../src/game-engine.js';

const quest1 = 'What is the result of the expression?';
const game = 'calc';
engine(quest1, game);

const makeCalc = (index, num1, num2) => {
    const calc = {
      0(a, b) { return a + b; },
      1(a, b) { return a - b; },
      2(a, b) { return a * b; },
    };
    const result = calc[index](num1, num2);
    return String(result);
  };