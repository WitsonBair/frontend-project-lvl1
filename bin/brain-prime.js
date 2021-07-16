#!/usr/bin/env node
import { engine } from '../src/game-engine.js';

const quest1 = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const game = 'prime';
engine(quest1, game);
