import readlineSync from 'readline-sync';

export const getRandom = (max, min) => {
  const minN = Math.ceil(min);
  const maxN = Math.floor(max);
  return Math.floor(Math.random() * (maxN - minN) + minN);
};

const playRound = ( round ) => {
  const [question, correctAnswer] = round;

  console.log(`Question: ${question}`);
  const userAnswer = /*readlineSync.question('Your answer: ');*/ "yes";

  const isCorrectUserAnswer = userAnswer === correctAnswer;
  const responseMessage = isCorrectUserAnswer
    ? 'Correct!'
    : `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`;

  console.log(responseMessage);

  return isCorrectUserAnswer;
};

export const playGame = (description, makeRound) => {
  console.log('Welcome to the Brain Games!');
  const username = /*/readlineSync.question('May I have your name? ');*/ "Bair";
  console.log(`Hello, ${username}`);
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const check = playRound( makeRound );
    if (!check) {
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};

//export default playGame;
