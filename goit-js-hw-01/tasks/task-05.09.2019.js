const max = Math.max(124, 0x3fa, 0b111111111);
// Генерируется случайно  три числа от до max === 1018
// задайте на основании этих чисел цвет в формате hex:  #00ff00
// валидный диапазон числел для цвета  0 - ff в hex
// задайте строку цвета в rgb в дипазоне 0 - 255:  rgb(0, 122, 255)
// задайте строку цвета в rgb в дипазоне 0% - 100%: rgb(25%, 55%, 88%)

const red = Math.floor(Math.random() * max);
const green = Math.floor(Math.random() * max);
const blue = Math.floor(Math.random() * max);
console.log(red);
console.log(green);
console.log(blue);

let hex;
let rgb;
let rgbPercent;

const rgbRedNumber = Math.floor(Math.random() * 255);
const rgbGreenNumber = Math.floor(Math.random() * 255);
const rgbBlueNumber = Math.floor(Math.random() * 255);

rgb = `rgb(${rgbRedNumber}, ${rgbGreenNumber}, ${rgbBlueNumber})`;

const rgbRedPercent = Math.floor(Math.random() * 100);
const rgbGreenPercent = Math.floor(Math.random() * 100);
const rgbBluePercent = Math.floor(Math.random() * 100);

rgbPercent = `rgb(${rgbRedPercent}%, ${rgbGreenPercent}%, ${rgbBluePercent}%)`;

const hexFirstPart = Math.floor(Math.random() * 255).toString(16);
const hexSecondPart = Math.floor(Math.random() * 255).toString(16);
const hexThirdPart = Math.floor(Math.random() * 255).toString(16);

hex = `#${hexFirstPart}${hexSecondPart}${hexThirdPart}`;

// String.length > 1 ? string : '0' + string
// let date = Date.now()
// date % 60
// 123456789 % 255

console.log(hex);
console.log(rgb);
console.log(rgbPercent);
// сегодня без assert - невозможно предсказать случайное число
// но позже, изучив функции, мы найдем выход из этой ситуации без проверок
