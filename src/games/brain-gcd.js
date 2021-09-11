#!/usr/bin/env node
import { engine } from '../src/game-engine.js';

const quest1 = 'Find the greatest common divisor of given numbers.';
const game = 'gcd';
engine(quest1, game);

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