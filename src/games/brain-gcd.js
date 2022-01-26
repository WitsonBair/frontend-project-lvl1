import { playGame, getRandom } from '../game-engine.js';

const quest1 = 'Find the greatest common divisor of given numbers.';

const calcGCD = (a, b) => b === 0 ? String(Math.abs(a)) : calcGCD(b, a % b);

export const makeRound = () => {
  const num1 = getRandom(100, 1);
  const num2 = getRandom(100, 1);
  const question = `${num1} ${num2}`;
  const answer = calcGCD(num1, num2);
  return [question, answer];
};

export default () => playGame(quest1, makeRound);
