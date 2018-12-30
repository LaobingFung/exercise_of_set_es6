'use strict';

function collect_same_elements(collection_a, object_b) {
  return collection_a.filter((curA) => object_b.value.includes(curA));
}
module.exports = collect_same_elements;