'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter((curItem) => curItem % 2 === 1).reduce((acc, curItem) => acc += curItem * 3 + 5, 0);
}
module.exports = hybrid_operation_to_uneven;