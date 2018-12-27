'use strict';

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
module.exports = get_integer_interval;