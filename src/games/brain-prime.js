import playGame from '../game-engine.js';
import getRandomNumber from '../get-random-number.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export const makeRound = () => {
  const num1 = getRandomNumber(1, 100);
  const question = `${num1}`;
  const check = isPrimeNumber(num1);
  const answer = check ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(description, makeRound);
