#!/usr/bin/env node
import { engine } from '../src/game-engine.js';

const quest1 = 'What number is missing in the progression?';
const game = 'progression';
engine(quest1, game);

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