#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { enquireName, getRandom } from '../cli.js';
import { engine } from '../game-engine.js';

const quest1 = 'Answer "yes" if the number is even, otherwise answer "no".';
const qntt_of_arg = 1;
engine(quest1, qntt_of_arg);