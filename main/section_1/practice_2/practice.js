'use strict';

function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter((curA) => collection_b[0].includes(curA));
}
module.exports = collect_same_elements;