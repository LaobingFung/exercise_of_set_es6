'use strict';

function grouping_count(collection) {
  let noRepeat = new Set(collection);
  let counter = {};
  noRepeat.forEach((curItem) => {
    counter[curItem] = 0;
  })
  collection.forEach((curItem) => counter[curItem] += 1);
  return counter;
}

module.exports = grouping_count;
