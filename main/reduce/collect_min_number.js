'use strict';

function collect_min_number(collection) {
  return collection.reduce((min, curItem) => {
    return min < curItem ? min : curItem;
  }, collection[0]);
}

module.exports = collect_min_number;

