import readlineSync from 'readline-sync';
import { enquireName, getRandom } from './cli.js';

export const engine = (quest1, game) => {
  console.log('Welcome to the Brain Games!');
  const name = enquireName();
  console.log(quest1);
  for (let i = 0; i < 3; i += 1) {
    const operations = ['+', '-', '*'];
    const index = Math.floor(getRandom(2, 0));
    const num1 = Math.floor(getRandom(100, 1));
    const num2 = Math.floor(getRandom(100, 1));
    if (game === "even") {
      console.log(`Question: ${num1}`);
    } else if (game === "calc") {
      console.log(`Question: ${num1} ${operations[index]} ${num2}`);
    }
    const answer = readlineSync.question('Your answer: ');
    let check = false;
    if (game === 'even') {
      check = isEven(num1);
    }
    else if (game === "calc") {
        check = makeCalc(index, num1, num2);
    }
    if (answer === check) {
      console.log('Correct!');
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${check}'.`);
      console.log(`Let's try again, ${name}!`);
      return 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};

const isEven = (num) => {
  let check = false;
  let result = "";
  const n = num;
  if (n % 2 === 0) {
    check = true;
  } else if (n % 2 !== 0) {
    check = false;
  }
  if (check === true) {
    result = "yes";
  }
  else {
    result = "no";
  }
  return result;
};

const makeCalc = (index, num1, num2) => {
    const calc = {
        0(a, b) { return a + b; },
        1(a, b) { return a - b; },
        2(a, b) { return a * b; },
    };
    const result = calc[index](num1, num2);
    return String(result);
};
