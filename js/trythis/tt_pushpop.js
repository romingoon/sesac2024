var assert = require('assert');

//push, pop, shift, unshift를 순수 함수로 작성

const arr = [1, 2, 3, 4];

//push
const push = (arr, ...args) => [...arr, ...args];

// pop
const pop = (arr, cnt = 1) => arr.filter((a, i) => i < arr.length - cnt);

// unshift
const unshift = (arr, ...args) => [...args, ...arr];

//shift
const shift = (arr, cnt = 1) => arr.filter((a, i) => i < arr.length >= cnt);

// assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
// assert.deepstrictEqual(pop(arr), 4);
// assert.deepstrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!
// assert.deepstrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
// assert.deepstrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
// assert.deepstrictEqual(shift(arr), [2, 3, 4]);
// assert.deepstrictEqual(shift(arr, 2), [3, 4]);
// assert.deepstrictEqual(arr, [1, 2, 3, 4]);
