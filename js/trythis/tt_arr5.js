const assert = require('assert');

//Array.reduce 함수를 고차 함수로 직접 구현하시오.
const reduce = (arr, fn, initValue) => {
  if (!Array.isArray(arr)) return initValue;

  let i = 0;
  let result = initValue ?? ((i += 1), arr[0]);
  for (; i < arr.length; i += 1) {
    result = fn(result, arr[i]);
  }
  return result;
};

assert.deepStrictEqual(
  reduce([1, 2, 3], (a, b) => a + b, 0),
  6
);
assert.deepStrictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a + b),
  15
);
assert.deepStrictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  120
);
assert.deepStrictEqual(
  reduce([2, 2, 2], (a, b) => a * b),
  8
);
assert.deepStrictEqual(
  reduce([3, 3, 3], (a, b) => a * b, 0),
  0
);
//test
console.log(reduce([1, 2, 3], (a, b) => a + b, 0)); // 6이면 통과!
[1, 2, 3].reduce((a, b) => a + b, 0); // 6

console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b)); // 15면 통과!
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1)); // 120이면 통과!
console.log(reduce([2, 2, 2], (a, b) => a * b)); // 8이면 통과!
console.log(reduce([3, 3, 3], (a, b) => a * b, 0)); // 0이면 통과!
