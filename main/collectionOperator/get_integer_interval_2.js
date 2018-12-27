'use strict';

function get_integer_interval_2(numberA, numberB) {
  let arr = new Array();
  let interval = numberA > numberB ? -1 : 1;
  while (numberA !== numberB) {
    arr.push(numberA);
    numberA += interval;
  }
  arr.push(numberA);
  return arr.filter((curNum) => curNum % 2 === 0);
}
module.exports = get_integer_interval_2;