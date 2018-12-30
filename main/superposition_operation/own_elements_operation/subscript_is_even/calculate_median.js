'use strict';

function computeMedian(collection) {
  collection.sort((a, b) => b - a);
  let medianI = (collection.length - 1) / 2;
  return (collection[Math.floor(medianI)] + collection[Math.ceil(medianI)]) / 2;
}
var calculate_median = function(collection) {
  let oddSubscript = collection.filter((curItem, curI) => curI % 2 === 1);
  return computeMedian(oddSubscript);
};
module.exports = calculate_median;