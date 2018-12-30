'use strict';
const KEYREG = /\w/;
const NUMREG = /[1-9][0-9]*/

function count_same_elements(collection) {
  let countResult = [];
  let counter = countElement(collection);
  for (let object of counter) {
    countResult.push({
      key: object[0],
      count: object[1]
    });
  }
  return countResult;
}

function countElement(arr) {
  let counterMap = new Map();
  arr.forEach((curItem) => {
    let letter = curItem.match(KEYREG);
    let num = curItem.match(NUMREG);
    if (num) {
      addCountToMap(counterMap, letter[0], parseInt(num[0]))
    } else {
      addCountToMap(counterMap, letter[0], 1)
    }
  })
  return counterMap;
}

function addCountToMap(map, element, count) {
  if (!map.has(element)) {
    map.set(element, 0);
  }
  map.set(element, map.get(element) + count);
}

function create_updated_collection(collection_a, object_b) {
  let arrA = count_same_elements(collection_a);
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