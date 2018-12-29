'use strict';

function choose_no_repeat_number(collection) {
  return collection.filter((curItem, curI) => collection.indexOf(curItem) === curI);
}

module.exports = choose_no_repeat_number;
