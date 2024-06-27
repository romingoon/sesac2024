/* [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오. (makeObjectFromArray)
 => { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }
*/
var assert = require('assert');

const arr = [
  ['A', 10, 20],
  ['B', 30, 40],
  ['C', 50, 60, 70],
];
const ofa = {
  A: [10, 20],
  B: [30, 40],
  C: [50, 60, 70],
};

const makeObjectFromArray = (arr) => {
  const obj = {};
  arr.forEach((el) => {
    const [key, ...values] = el;
    obj[key] = values;
  });
  return obj;
};
const message1 = 'makeObjectFromArray';
assert.deepStrictEqual(makeObjectFromArray(arr), ofa, message1);

console.log(makeObjectFromArray(arr));
/* 
위에서 만든 객체를 다시 배열로 만드시오. (makeArrayFromObject)
{ 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }
=> [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]
*/

const makeArrayFromObject = (obj) => {
  const arr = [];
  for (const key in obj) {
    arr.push([key, ...obj[key]]);
  }
  return arr;
};
const afo = [
  ['A', 10, 20],
  ['B', 30, 40],
  ['C', 50, 60, 70],
];

const message2 = 'makeArrayFromObject';
const obj = makeArrayFromObject(makeObjectFromArray(arr));
assert.deepStrictEqual(obj, afo, message2);
console.log(obj);
