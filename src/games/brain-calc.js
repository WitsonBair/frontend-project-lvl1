import { playGame, getRandomNumber } from '../game-engine.js';

const quest1 = 'What is the result of the expression?';

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
  const index = getRandomNumber(3, 0);
  const num1 = getRandomNumber(100, 1);
  const num2 = getRandomNumber(100, 1);
  const sign = operations[index];
  const question = `${num1} ${operations[index]} ${num2}`;
  const answer = makeCalc(sign, num1, num2);
  return [question, `${answer}`];
};

export default () => playGame(quest1, makeRound);
