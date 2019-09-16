const calculateEngravingPrice = (message, pricePerWord) => {
  const countOfWord = message.split(' ').length;
  const total = countOfWord * pricePerWord;
  const result = `Данная гравировка будет вам стоить ${total} долларов`;
  return result;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100
