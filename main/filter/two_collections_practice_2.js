'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  return collection_a.filter((curItem) => !collection_b.includes(curItem));
}

module.exports = choose_no_common_elements;
