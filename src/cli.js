import readlineSync from 'readline-sync';

export const enquireName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandom = (max, min) => {
  const minN = Math.ceil(min);
  const maxN = Math.floor(max);
  return Math.floor(Math.random() * (maxN - minN) + minN);
};
