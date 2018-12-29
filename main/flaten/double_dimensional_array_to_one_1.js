'use strict';

function double_to_one(collection) {
  return collection.reduce((acc, curItem) => {
    return acc = acc.concat(curItem);
  }, []);
}

module.exports = double_to_one;
