'use strict';

const ALPHANUMBER = {
  '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e',
  '6': 'f', '7': 'g', '8': 'h', '9': 'i', '10': 'j',
  '11': 'k', '12': 'l', '13': 'm', '14': 'n', '15': 'o',
  '16': 'p', '17': 'q', '18': 'r', '19': 's', '20': 't',
  '21': 'u', '22': 'v', '23': 'w', '24': 'x', '25': 'y', '26': 'z'
}

function get_letter_interval_2(number_a, number_b) {
  let alphaArr = get_integer_interval(number_a, number_b);
  return alphaArr.map((curItem) => {
    return numberToAlpha(curItem);
  });
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
      }else {
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

function get_integer_interval(numberA, numberB) {
  let arr = new Array();
  let interval = numberA > numberB ? -1 : 1;
  while (numberA !== numberB) {
    arr.push(numberA);
    numberA += interval;
  }
  arr.push(numberA);
  return arr;
}
module.exports = get_letter_interval_2;