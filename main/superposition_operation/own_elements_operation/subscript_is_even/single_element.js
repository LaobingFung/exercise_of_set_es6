'use strict';
var single_element = function(collection) {
  let oddSubscript = collection.filter((curItem, curI) => curI % 2 === 1);
  return oddSubscript.filter((curItem) => oddSubscript.indexOf(curItem) === oddSubscript.lastIndexOf(curItem));
};
module.exports = single_element;