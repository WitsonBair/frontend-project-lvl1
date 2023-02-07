import readlineSync from 'readline-sync';

const playGame = (description, makeRound) => {
  const rounds = 3;
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
  console.log(description);

  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = makeRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if(userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
};

export default playGame;
