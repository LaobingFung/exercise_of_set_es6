'use strict';
const ALPHANUMBER = {
  '1': 'a',
  '2': 'b',
  '3': 'c',
  '4': 'd',
  '5': 'e',
  '6': 'f',
  '7': 'g',
  '8': 'h',
  '9': 'i',
  '10': 'j',
  '11': 'k',
  '12': 'l',
  '13': 'm',
  '14': 'n',
  '15': 'o',
  '16': 'p',
  '17': 'q',
  '18': 'r',
  '19': 's',
  '20': 't',
  '21': 'u',
  '22': 'v',
  '23': 'w',
  '24': 'x',
  '25': 'y',
  '26': 'z'
}
let numberToAlpha = (number) => {
  let number26 = [];
  if (number <= 26) {
    number26.push(number);
  } else {
    while (Math.floor(number / 26) !== 0) {
      if (number % 26 === 0) {
        number26.push(26);
        number = Math.floor(number / 26) - 1;
      } else {
        number26.push(number % 26);
        number = Math.floor(number / 26);
      }
    }
    number26.push(number % 26);
  }
  number26.reverse();
  return number26.map((curItem) => {
    return ALPHANUMBER[curItem]
  }).join('');
}

function computeMedian(collection) {
  collection.sort((a, b) => b - a);
  let medianI = (collection.length - 1) / 2;
  return (collection[Math.floor(medianI)] + collection[Math.ceil(medianI)]) / 2;
}

function median_to_letter(collection) {
  let median = computeMedian(collection);
  return numberToAlpha(Math.ceil(median));
}
module.exports = median_to_letter;