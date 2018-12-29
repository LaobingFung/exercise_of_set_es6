'use strict';

function get_union(collection_a, collection_b) {
  let union = collection_a.slice(0);
  collection_b.forEach((curItem) => {
    if (!union.includes(curItem)) {
      union.push(curItem);
    }
  });
  return union;
}
module.exports = get_union;