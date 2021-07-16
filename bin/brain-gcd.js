#!/usr/bin/env node
import { engine } from '../src/game-engine.js';

const quest1 = 'Find the greatest common divisor of given numbers.';
const game = 'gcd';
engine(quest1, game);
