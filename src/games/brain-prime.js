import { playGame, getRandom } from '../game-engine.js';

const quest1 = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num1) => {
  if (num1 < 2) { return "no"; }
  for (let i = 2; i < num1; i++) {
    if (num1 % i === 0) {
      return "no";
    }
  }
  return "yes";
};

export const makeRound = () => {
  const num1 = getRandom(100, 1);
  const question = `${num1}`;
  const answer = isPrimeNumber(num1);
  return [question, answer];
};

export default () => playGame(quest1, makeRound);
