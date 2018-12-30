'use strict';

function compute_median(collection) {
  collection.sort((a, b) => b - a);
  let medianI = (collection.length - 1) / 2;
  return (collection[Math.floor(medianI)] + collection[Math.ceil(medianI)]) / 2;
}

module.exports = compute_median;


