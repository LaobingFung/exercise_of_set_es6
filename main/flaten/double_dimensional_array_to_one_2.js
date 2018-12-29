'use strict';

function double_to_one(collection) {
  let one_dime = collection.reduce((acc, curItem) => {
    return acc = acc.concat(curItem);
  }, [])
  return one_dime.filter((curItem, curI) => curI === one_dime.indexOf(curItem));
}

module.exports = double_to_one;
