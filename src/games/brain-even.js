import playGame from '../game-engine.js';
import getRandomNumber from '../get-random-number.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

export const makeRound = () => {
  const num = getRandomNumber(100, 0);
  const result = isEven(num) ? 'yes' : 'no';
  return [num, result];
};

export default () => playGame(description, makeRound);
