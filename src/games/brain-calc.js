import playGame from '../game-engine.js';
import getRandomNumber from '../get-random-number.js';

const description = 'What is the result of the expression?';

const makeCalc = (sign, num1, num2) => {
  const calc = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  return calc[sign](num1, num2);
};

export const makeRound = () => {
  const operations = ['+', '-', '*'];
  const index = getRandomNumber(0, operations.length);
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const sign = operations[index];
  const question = `${num1} ${sign} ${num2}`;
  const answer = makeCalc(sign, num1, num2);
  return [question, `${answer}`];
};

export default () => playGame(description, makeRound);
