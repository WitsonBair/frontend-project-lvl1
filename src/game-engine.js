import readlineSync from 'readline-sync';
import { enquireName, getRandom } from '../bin/src/cli.js';

export const engine = (quest1, qntt_of_arg) => {
    console.log("Welcome to the Brain Games!");
    const name = enquireName();
    console.log(quest1);
    for (let i = 0; i < 3; i += 1) {
        const num1 = Math.floor(getRandom(100, 1));
        const num2 = Math.floor(getRandom(100, 1));
        if (qntt_of_arg === 1) {
            console.log(`Question: ${num}`);
        }
        else if (qntt_of_arg === 2) {
            console.log(`Question: ${num1} ${num2}`);
        }
        const answer = readlineSync.question('Your answer: ');
        if (answer === 'yes') {
            if (num % 2 === 0) {
                console.log('Correct!');
            } else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
                console.log(`Let's try again, ${name}!`);
                return 0;
            }
        }
        else if (answer === 'no') {
            if (num % 2 !== 0) {
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