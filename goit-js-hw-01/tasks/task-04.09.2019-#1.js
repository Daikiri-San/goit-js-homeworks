const applePrice = '0.4$ / kg';
const appleQuntity = '1.4kg';
const orangePrice = '1.3$ / kg';
const orangeQuntity = '1.2kg';

let totalWeight;
let cost;

const appleNumber = Number.parseFloat(applePrice);
const appleQuntityNumber = Number.parseFloat(appleQuntity);
const orangeNumber = Number.parseFloat(orangePrice);
const orangeQuntityNumber = Number.parseFloat(orangeQuntity);

totalWeight = (appleQuntityNumber * 10 + orangeQuntityNumber * 10) / 10;

console.log(totalWeight);
console.assert(totalWeight === 2.6, 'Error in weight calculation');

const appleCost = (appleNumber * appleQuntityNumber * 10) / 10;

console.log(appleCost);
console.assert(appleCost === 0.56, 'Error in cost calculation');

const orangeCost = (orangeNumber * orangeQuntityNumber * 10) / 10;

console.log(orangeCost);
console.assert(orangeCost === 1.56, 'Error in cost calculation');

cost = appleCost + orangeCost;

console.log(cost);
console.assert(cost === 2.12, 'Error in cost calculation');

console.log(`Total wight: ${totalWeight}kg. Cost: ${cost}$`);
