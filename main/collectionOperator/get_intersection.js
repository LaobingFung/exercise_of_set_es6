'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter((curItem) => collection_a.includes(curItem));
}

module.exports = get_intersection;
