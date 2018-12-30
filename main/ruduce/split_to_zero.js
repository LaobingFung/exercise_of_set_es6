'use strict';

function spilt_to_zero(number, interval) {
  let arr = [number];
  while (arr[arr.length - 1] > 0) {
    number = Math.round((number - interval) * 10) / 10;
    arr.push(number);
  }
  return arr;
}

module.exports = spilt_to_zero;
