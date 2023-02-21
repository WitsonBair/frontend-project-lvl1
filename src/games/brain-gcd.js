import playGame from '../game-engine.js';
import getRandomNumber from '../get-random-number.js';

const description = 'Find the greatest common divisor of given numbers.';

const calcGCD = (a, b) => (b === 0 ? (Math.abs(a)) : calcGCD(b, a % b));

export const makeRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const answer = calcGCD(num1, num2);
  return [question, `${answer}`];
};

export default () => playGame(description, makeRound);
