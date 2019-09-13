function findLongestWord(string) {
  const stringSplit = string.split(' ');
  let longestWord;
  let lgth = 0;
  for (let i = 0; i < stringSplit.length; i += 1) {
    if (stringSplit[i].length > lgth) {
      lgth = stringSplit[i].length;
      longestWord = stringSplit[i];
    }
  }
  const message = `Самое длинное слово в строке, это слово '${longestWord}'`;
  return message;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
