'use strict';

function collect_same_elements(collection_a, object_b) {
  let arrA = collection_a.map((curObj) => curObj.key);
  return arrA.filter((curA) => object_b.value.includes(curA));
}
module.exports = collect_same_elements;