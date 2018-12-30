'use strict';

function computAverage(collection) {
  let sum = collection.reduce((acc, curItem) => {
    return acc += curItem;
  }, 0);
  return sum / collection.length;
}
var calculate_average = function(collection) {
  let oddSubscript = collection.filter((curItem, curI) => curI % 2 === 1);
  return computAverage(oddSubscript);
};
module.exports = calculate_average;