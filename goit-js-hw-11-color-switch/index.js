/* eslint-disable no-unused-vars */
const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.body,
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function switchColorFromArray(colorArray) {
  const randomArrayColorID = randomIntegerFromInterval(
    0,
    colorArray.length - 1,
  );
  refs.body.style.backgroundColor = colorArray[randomArrayColorID];
}

const switchOfBodyColor = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.switchOfColor = setInterval(() => {
      switchColorFromArray(colors);
    }, 1000);
  },
  stop() {
    this.isActive = false;
    clearInterval(this.switchOfColor);
  },
};

function test() {
  console.log('Im Alive');
}

refs.start.addEventListener(
  'click',
  switchOfBodyColor.start.bind(switchOfBodyColor),
);
refs.stop.addEventListener(
  'click',
  switchOfBodyColor.stop.bind(switchOfBodyColor),
);
