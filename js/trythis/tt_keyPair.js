/*다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때,
배열에서 합해서 N이되는 두 개의 요소(index)를 찾는 keyPair(arr, N)
함수를 작성하시오. (O(n^2) 이면 fail!!)
*/
const assert = require('assert');
const keyPairFor = (arr, target) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      console.log(i, j);
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
}; // 시간 복잡도 O(n^2)
const keyPair1 = (arr, target) => {
  const diffIdx = [];
  for (let i = 0; i < arr.length; i += 1) {
    const diff = target - arr[i];
    if (diffIdx[diff] !== undefined) return [diffIdx[diff], i];
    else diffIdx[arr[i]] = i;
  }
}; // 시간 복잡도 O(n)

const keyPair = (arr, target) => {
  for (let num of arr) {
    const diff = target - num;
    if (arr.includes(diff)) {
      return [arr.indexOf(num), arr.indexOf(diff)];
    }
  }
}; // 시간 복잡도 O(n^2)

const keyPair3 = (arr, target) => {
  for (let numIdx in arr) {
    const pair = target - arr[numIdx];
    if (arr.indexOf(pair) !== -1) {
      return [arr.indexOf(pair), parseInt(numIdx)];
    }
  }
}; // 시간 복잡도 O(n^2)

console.time('keyPair');

//test
console.log(keyPair1([1, 3, 4, 5], 7)); // [1, 2]
console.log(keyPair1([1, 4, 45, 6, 10, 8], 16)); // [3, 4]
console.log(keyPair1([1, 2, 4, 3, 6], 10)); // [2, 4]
console.log(keyPair1([1, 2, 3, 4, 5, 7], 9)); // [3, 4]

console.timeEnd('keyPair');
//cf. O(n^2) ⇒ ⇒ ⇒ O(N) || O(logN)
// assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
// assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
// assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
// assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);
