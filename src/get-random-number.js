const getRandomNumber = (min, max) => {
  const minN = Math.ceil(min);
  const maxN = Math.ceil(max);
  return Math.floor(Math.random() * (maxN - minN) + minN);
};

export default getRandomNumber;
