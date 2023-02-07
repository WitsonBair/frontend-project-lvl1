import playGame from '../game-engine.js';
import getRandomNumber from '../get-random-number.js';

const quest1 = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num1) => {
  if (num1 < 2) { return false; }
  for (let i = 2; i < num1 / 2; i += 1) {
    if (num1 % i === 0) {
      return false;
    }
  }
  return true;
};

export const makeRound = () => {
  const num1 = getRandomNumber(100, 1);
  const question = `${num1}`;
  const check = isPrimeNumber(num1);
  const answer = check ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(quest1, makeRound);
