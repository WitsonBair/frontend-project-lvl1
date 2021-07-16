#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { enquireName, getRandom } from '../src/cli.js';
import { engine } from '../src/game-engine.js';

const quest1 = 'Answer "yes" if the number is even, otherwise answer "no".';
const qntt_of_arg = 1;
const game = 'even';
engine(quest1, qntt_of_arg, game);
