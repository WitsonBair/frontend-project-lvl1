import readlineSync from 'readline-sync';
import { enquireName, getRandom } from './cli.js';

export const isEven = (num1) => {
  let check = false;
  let result = '';
  const n = num1;
  if (n % 2 === 0) {
    check = true;
  } else if (n % 2 !== 0) {
    check = false;
  }
  if (check === true) {
    result = 'yes';
  } else {
    result = 'no';
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

const calcGCD = (numO, numT) => {
  let num1 = numO;
  let num2 = numT;
  while (num1 > 0 && num2 > 0) {
    if (num1 === num2) {
      return String(num1);
    }
    if (num1 > num2) {
      num1 %= num2;
      if (num1 % (num1 + num2) === 0 && num2 % (num1 + num2) === 0) {
        return String(num1 + num2);
      }
    } else if (num1 < num2) {
      num2 %= num1;
      if (num1 % (num1 + num2) === 0 && num2 % (num1 + num2) === 0) {
        return String(num1 + num2);
      }
    }
  }
  return 0;
};

const makeAnArray = () => {
  let num = getRandom(100, 1);
  const plusProg = getRandom(10, 1);
  const arr = [num];
  for (let i = 0; i < 9; i += 1) {
    num += plusProg;
    arr.push(num);
  }
  return arr;
};

const isPrimeNumber = (num1) => {
  let check = true;
  let result = '';
  const primeNumbers = [2, 3, 5, 7];
  const answer = [num1].some((el) => primeNumbers.includes(el));
  if (answer) {
    return answer;
  }
  for (let i = 0; i < primeNumbers.length; i += 1) {
    if (num1 % primeNumbers[i] === 0) {
      check = false;
    }
  }
  if (check === true) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

export const engine = (quest1, game) => {
  console.log('Welcome to the Brain Games!');
  const name = enquireName();
  console.log(quest1);
  for (let i = 0; i < 3; i += 1) {
    const arr = makeAnArray();
    const indexArr = getRandom(9, 0);
    const temp = arr[indexArr];
    arr[indexArr] = '..';
    const operations = ['+', '-', '*'];
    const index = Math.floor(getRandom(2, 0));
    const num1 = Math.floor(getRandom(100, 1));
    const num2 = Math.floor(getRandom(100, 1));
    if (game === 'even') {
      console.log(`Question: ${num1}`);
    } else if (game === 'calc') {
      console.log(`Question: ${num1} ${operations[index]} ${num2}`);
    } else if (game === 'gcd') {
      console.log(`Question: ${num1} ${num2}`);
    } else if (game === 'progression') {
      console.log(`Question: ${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]} ${arr[6]} ${arr[7]} ${arr[8]} ${arr[9]}`);
    } else if (game === 'prime') {
      console.log(`Question: ${num1}`);
    }
    const answer = readlineSync.question('Your answer: ');
    let check = false;
    if (game === 'even') {
      check = isEven(num1);
    } else if (game === 'calc') {
      check = makeCalc(index, num1, num2);
    } else if (game === 'gcd') {
      check = calcGCD(num1, num2);
    } else if (game === 'progression') {
      check = String(temp);
    } else if (game === 'prime') {
      check = isPrimeNumber(num1);
    }
    if (answer === check) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${check}'.`);
      console.log(`Let's try again, ${name}!`);
      return 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};
