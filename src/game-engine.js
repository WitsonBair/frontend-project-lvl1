import readlineSync from 'readline-sync';

export const getRandomNumber = (max, min) => {
  const minN = Math.ceil(min);
  const maxN = Math.ceil(max);
  return Math.floor(Math.random() * (minN - maxN) + maxN);
};

export const playGame = (description, makeRound) => {
  const magicNumber = 3;
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
  console.log(description);

  for (let i = 0; i < magicNumber; i += 1) {
    const [question, correctAnswer] = makeRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isCorrectUserAnswer = userAnswer === correctAnswer;
    const responseMessage = isCorrectUserAnswer ? 'Correct!'
      : `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`;

    console.log(responseMessage);

    if (!isCorrectUserAnswer) {
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};
