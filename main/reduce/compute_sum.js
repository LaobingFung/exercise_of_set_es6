'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((acc, curItem) => acc += curItem);
}

module.exports = calculate_elements_sum;

