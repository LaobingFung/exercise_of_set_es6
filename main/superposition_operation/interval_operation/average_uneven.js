'use strict';

function average_uneven(collection) {
  let oddArr = collection.filter((curItem) => curItem % 2 === 1);
  let sumOfOdd = oddArr.reduce((acc, curItem) => acc += curItem, 0);
  return sumOfOdd / oddArr.length;
}
module.exports = average_uneven;