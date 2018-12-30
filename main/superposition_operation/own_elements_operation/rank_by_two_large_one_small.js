'use strict';

function flaten(collection) {
  return collection.reduce((acc, curItem) => {
    return acc = acc.concat(curItem);
  }, []);
}

function rank_by_two_large_one_small(collection) {
  let coll = Array.from(collection);
  coll.sort((a, b) => a - b);
  let groupBy3 = [];
  for (let i = 0; i < coll.length; i += 3) {
    if (coll[i + 3]) {
      groupBy3.push(coll.slice(i, i + 3));
    } else {
      groupBy3.push(coll.slice(i));
    }
  }
  groupBy3.map((curArr) => {
    if (curArr.length === 3) {
      return curArr.push(curArr.shift())
    }
    return curArr;
  });
  return flaten(groupBy3);
}
module.exports = rank_by_two_large_one_small;