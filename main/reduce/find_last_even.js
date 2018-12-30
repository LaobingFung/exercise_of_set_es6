'use strict';

function find_last_even(collection) {
  let arr = Array.from(collection);
  return arr.reverse().find((curItem) => curItem % 2 === 0);
}
module.exports = find_last_even;