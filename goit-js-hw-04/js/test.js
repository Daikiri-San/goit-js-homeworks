const greet = function (guest) {
  return `${guest}, welcome to ${this.name}!`;
};

const hotel = { name: 'Resort Hotel' };

const hotelGreeter = greet.bind(hotel, 'Mango');

hotelGreeter(); // "Mango, wellcome to Resort Hotel!"
