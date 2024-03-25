const generateLotteries = (n) => {
  const lotteries = [];

  for (let i = 0; i < n; i++) {
    const id = i.toString();
    const title = `Lottery ${id}`;
    const description = `This is the ${[i]}th lottery`;
    const owner = generateRandomEthereumAddress();
    const prize = getRandomFloat(10, 100).toFixed(2);
    const ticketPrice = getRandomFloat(0.01, 0.1).toFixed(2);
    const image = "https://ibb.co/PN2JXzp";
    const createdAt = getRandomInt(7, 30);
    const expiresIn = getRandomTimestamp(
      new Date("2024-03-24").getTime(),
      new Date("2024-12-24").getTime()
    );
    const expiresAt = new Date(Date.now());
    const paricipants = getRandomInt(10, 100);
    const drawn = false;

    lotteries.push({
      id,
      title,
      description,
      owner,
      prize,
      ticketPrice,
      image,
      expiresIn,
      createdAt,
      expiresAt,
      paricipants,
      drawn,
    });
  }
  return lotteries;
};

function generateRandomEthereumAddress() {
  const hexchars = "123456789abcdef";
  let address = "0x";
  for (let i = 0; i < 40; i++) {
    address += hexchars.charAt(Math.floor(Math.random() * hexchars.length));
  }

  return address;
}

function getRandomFloat(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomTimestamp(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const lotteries = generateLotteries(5);
console.log(lotteries);
