'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.reduce((equal, curItem, curI) => {
    return equal && (curItem === collection_b[curI])
  }, true)
}

module.exports = compare_collections;


