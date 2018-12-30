'use strict';

function amount_even(collection) {
  return collection.filter((curItem) => curItem % 2 === 0).reduce((acc, curItem) => acc += curItem, 0)
}

module.exports = amount_even;
