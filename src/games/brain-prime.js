#!/usr/bin/env node
import { engine } from '../src/game-engine.js';

const quest1 = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const game = 'prime';
engine(quest1, game);

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