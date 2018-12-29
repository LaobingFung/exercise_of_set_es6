'use strict';

function compute_average(collection) {
  let sum = collection.reduce((acc, curItem) => {
    return acc += curItem;
  }, 0);
  return sum / collection.length;
}
module.exports = compute_average;