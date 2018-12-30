'use strict';

function find_first_even(collection) {
  return collection.find((curItem) => curItem % 2 === 0);
}

module.exports = find_first_even;

