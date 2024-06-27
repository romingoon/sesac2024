const assert = require('assert');

// const deleteArray = (arr, start, end) => {
//   const newArr = [];
//   if (start < 0) {
//     start = arr.length + start;
//   }
//   if (end < 0) {
//     end = arr.length + end;
//   }
//   for (let i = 0; i < arr.length; i += 1) {
//     if (i < start || i >= end) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

const arr = [1, 2, 3, 4];

const deleteArray = (obj, keyOrIdx, valOrIdx) => {
  if (typeof keyOrIdx === 'number' && arr[keyOrIdx]) {
    return arr.filter((a) => a >= keyOrIdx || a <= (valOrIdx ?? arr.length));
  }
};

console.log(deleteArray(arr, 2));
console.log(deleteArray(arr, 1, 3));
console.log(deleteArray(arr));

// assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
// assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
// assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: 'Hong' };
const Kim = { id: 2, name: 'Kim' };
const Lee = { id: 3, name: 'Lee' };
const users = [Hong, Kim, Lee];

// assert.deepStrictEqual(deleteObjArray(users, 2), [Hong, Kim]);
// assert.deepStrictEqual(deleteObjArray(users, 1, 2), [Hong, Lee]);
// assert.deepStrictEqual(deleteObjArray(users, 'id', 2), [Hong, Lee]);
// assert.deepStrictEqual(deleteObjArray(users, 'name', 'Lee'), [Hong, Kim]);
console.log(Array.isArray(Hong)); // false
console.log(deleteArray(users, 2));
console.log(deleteArray(users, 1, 2));
console.log(deleteArray(users, 'id', 2));
console.log(deleteArray(users, 'name', 'Lee'));
