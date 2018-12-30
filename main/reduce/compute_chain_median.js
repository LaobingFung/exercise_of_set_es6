'use strict';

function compute_chain_median(collection) {
  let arr = collection.split('->').map((curItem) => parseInt(curItem));
  arr.sort((a, b) => b - a);
  let medianI = (arr.length - 1) / 2;
  return (arr[Math.floor(medianI)] + arr[Math.ceil(medianI)]) / 2;
}
module.exports = compute_chain_median;