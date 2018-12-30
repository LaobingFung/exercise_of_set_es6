'use strict';

function one_add_next_multiply_three(collection) {
  let mapArr = collection.map((curItem, curI, arr) => (curItem + arr[curI + 1]) * 3);
  mapArr.pop();
  return mapArr;
}
module.exports = one_add_next_multiply_three;