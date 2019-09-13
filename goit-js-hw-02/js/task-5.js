function checkForSpam(str) {
  // eslint-disable-next-line no-multi-spaces
  const result =    str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale');
  return result;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
