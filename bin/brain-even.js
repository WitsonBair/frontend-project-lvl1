#!/usr/bin/env node
import { engine } from '../src/game-engine.js';

const quest1 = 'Answer "yes" if the number is even, otherwise answer "no".';
const game = 'even';
engine(quest1, game);
