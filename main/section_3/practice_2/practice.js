'use strict';

function create_updated_collection(collection_a, object_b) {
  let arrA = Array.from(collection_a);
  object_b.value.forEach((curItem) => {
    arrA.forEach((curObj) => {
      if (curObj.key === curItem) {
        curObj.count -= Math.floor(curObj.count / 3);
      }
    })
  });
  return arrA;
}
module.exports = create_updated_collection;