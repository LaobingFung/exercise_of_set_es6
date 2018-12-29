'use strict';

function collect_max_number(collection) {
  return collection.reduce((max, curItem) => {
    return max > curItem ? max : curItem;
  }, collection[0]);
}

module.exports = collect_max_number;
