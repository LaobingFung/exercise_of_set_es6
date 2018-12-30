'use strict';
var even_asc_odd_desc = function(collection) {
  let oddArr = collection.filter((curItem) => curItem % 2 === 1);
  let evenArr = collection.filter((curItem) => curItem % 2 === 0);
  evenArr.sort((a, b) => a - b);
  oddArr.sort((a, b) => b - a);
  return evenArr.concat(oddArr);
};
module.exports = even_asc_odd_desc;