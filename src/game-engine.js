import readlineSync from 'readline-sync';
import { enquireName, getRandom } from './cli.js';

export const engine = (quest1, qntt_of_arg, game) => {
  console.log('Welcome to the Brain Games!');
  const name = enquireName();
  console.log(quest1);
  for (let i = 0; i < 3; i += 1) {
    const num1 = Math.floor(getRandom(100, 1));
    const num2 = Math.floor(getRandom(100, 1));
    if (qntt_of_arg === 1) {
      console.log(`Question: ${num1}`);
    } else if (qntt_of_arg === 2) {
      console.log(`Question: ${num1} ${num2}`);
    }
    const answer = readlineSync.question('Your answer: ');
    let check = false;
    let checkAns = false;
    if (answer === 'yes') {
      checkAns = true;
    } else if (answer === 'no') {
      checkAns = false;
    }
    if (game === 'even') {
      check = isEven(num1);
    }
    if (checkAns === true) {
      if (checkAns === check) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${name}!`);
        return 0;
      }
    } else if (checkAns === false) {
      if (checkAns === check) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${name}!`);
        return 0;
      }
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};

const isEven = (num) => {
  let check = false;
  const n = num;
  if (n % 2 === 0) {
    check = true;
  } else if (n % 2 !== 0) {
    check = false;
  }
  return check;
};
