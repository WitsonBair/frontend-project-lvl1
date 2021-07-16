#!/usr/bin/env node
import { engine } from "../src/game-engine.js";

const quest1 = 'What is the result of the expression?';
const game = 'calc';
engine(quest1, game);
