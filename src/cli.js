import readlineSync from 'readline-sync';

export const enquireName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const noNamedDefaultRuleSuck = () => {
  console.log('Just no!');
};
