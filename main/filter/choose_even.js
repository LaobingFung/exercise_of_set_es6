'use strict';

function choose_even(collection) {
  return collection.filter((curItem) => curItem % 2 === 0);
}

module.exports = choose_even;
