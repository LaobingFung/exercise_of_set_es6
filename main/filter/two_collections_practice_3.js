'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter((curA) => {
    return collection_b.some((curB) => curA % curB === 0)
  });
}
module.exports = choose_divisible_integer;