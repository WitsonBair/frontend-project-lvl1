import { playGame, getRandom } from '../game-engine.js';

const quest1 = 'Answer "yes" if the number is even, otherwise answer "no".';

export const makeRound = () => {
  const num = getRandom(100, 0);
  const result = num % 2 === 0 ? "yes" : "no";
  return [num, result];
};

export default () => playGame(quest1, makeRound);
