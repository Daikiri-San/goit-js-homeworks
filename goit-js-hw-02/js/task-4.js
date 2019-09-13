function formatString(string) {
  const formatedString = string;
  let message;
  const size = 40;
  if (string.length >= size) {
    message = `${formatedString.slice(0, size)}...`;
  } else {
    message = `${formatedString}`;
  }
  return message;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
