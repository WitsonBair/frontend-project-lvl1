const getRandomNumber = (max, min) => {
    const minN = Math.ceil(min);
    const maxN = Math.ceil(max);
    return Math.floor(Math.random() * (minN - maxN) + maxN);
};

export default getRandomNumber;