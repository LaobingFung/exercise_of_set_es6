'use strict';
var is_exist_element = function(collection, element) {
  let evenSubscript = collection.filter((curItem, curI) => curI % 2 === 0);
  return evenSubscript.some((curItem) => curItem === element);
};
module.exports = is_exist_element;