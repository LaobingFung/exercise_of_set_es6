'use strict';
const KEYREG = /\w/;
const NUMREG = /[1-9][0-9]*/

function count_same_elements(collection) {
  let countResult = [];
  let counter = countElement(collection);
  for (let object of counter) {
    countResult.push({
      name: object[0],
      summary: object[1]
    });
  }
  return countResult;
}

function countElement(arr) {
  let counterMap = new Map();
  arr.forEach((curItem) => {
    let letter = curItem.match(KEYREG);
    let num = curItem.match(NUMREG);
    if(num) {
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
module.exports = count_same_elements;