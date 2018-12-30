'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter((curItem) => curItem % 2 === 1).map((curItem) => curItem * 3 + 2);
}
module.exports = hybrid_operation_to_uneven;