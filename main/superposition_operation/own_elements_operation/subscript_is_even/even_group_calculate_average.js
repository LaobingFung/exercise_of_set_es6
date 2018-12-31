'use strict';

function groupByDigit(arr) {
  let temp = Array.from(arr).sort((a, b) => a - b);
  let digit = temp.map((curItem) => curItem.toString().length);
  let firstNum = temp.shift();
  let group = temp.reduce((grp, curItem, curI) => {
    if (digit[curI] < digit[curI + 1]) {
      grp.push([curItem]);
      return grp;
    } else {
      grp[grp.length - 1].push(curItem);
      return grp;
    }
  }, [
    [firstNum]
  ])
  return group;
}

function computeAverage(collection) {
  let sum = collection.reduce((acc, curItem) => {
    return acc += curItem;
  }, 0);
  return sum / collection.length;
}
var even_group_calculate_average = function(collection) {
  let oddSubscriptEvenNum = collection.filter((curItem, curI) => curI % 2 === 1 && curItem % 2 === 0);
  if (oddSubscriptEvenNum.length === 0) {
    return [0];
  }
  let groups = groupByDigit(oddSubscriptEvenNum);
  return groups.map((curArr) => computeAverage(curArr));
};
module.exports = even_group_calculate_average;