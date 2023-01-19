import { playGame, getRandomNumber } from '../game-engine.js';

const quest1 = 'Find the greatest common divisor of given numbers.';

const calcGCD = (a, b) => (b === 0 ? (Math.abs(a)) : calcGCD(b, a % b));

export const makeRound = () => {
  const num1 = getRandomNumber(100, 1);
  const num2 = getRandomNumber(100, 1);
  const question = `${num1} ${num2}`;
  const answer = calcGCD(num1, num2);
  return [question, `${answer}`];
};

export default () => playGame(quest1, makeRound);
