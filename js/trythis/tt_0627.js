// ex 1) push, pop, shift, unshift를 순수 함수로 작성

const arr1 = [1, 2, 3, 4];

//push
const push = (arr, ...args) => [...arr, ...args];
// pop
const pop = (arr, cnt = 1) => arr.filter((a, i) => i < arr.length - cnt);
// unshift
const unshift = (arr, ...args) => [...args, ...arr];
//shift
const shift = (arr, cnt = 1) => arr.filter((a, i) => i < arr.length >= cnt);

// ex 2) 다음과 같은 deleteArray를 순수 함수로 작성하시오.

const arr2 = [1, 2, 3, 4];

const Hong = { id: 1, name: 'Hong' };
const Kim = { id: 2, name: 'Kim' };
const Lee = { id: 3, name: 'Lee' };
const users = [Hong, Kim, Lee];

const deleteArray = (arr, keyOrIdx, valOrIdx) => {
  if (typeof keyOrIdx === 'number' && arr[keyOrIdx]) {
    return arr.filter((a) => a >= keyOrIdx || a <= (valOrIdx ?? arr.length));
  }
};

// ex3) 아래 users 배열에 대하여 추가/수정/삭제하는 순수 함수를 작성하시오.
const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users2 = [kim, lee, park]; // 오염되면 안됨!!

Object.defineProperty(users, 'addUser', {
  value: (user) => {
    return [...users, user];
  },
  enumerable: false,
});

Object.defineProperty(users, 'removeUser', {
  value: (user) => {
    return users.filter((el) => el !== user);
  },
  enumerable: false,
});
Object.defineProperty(users, 'changeUser', {
  value: (oldUser, newUser) => {
    return users.map((el) => (el === oldUser ? newUser : el));
  },
  enumerable: false,
});

// ex4) 배열의 각 원소를 String으로 변환하시오.
const arr = [1, 2, 3, true];
const ret1 = arr.map((el) => el.toString());

// ex5) 다음과 같이 작동하는 classNames 함수를 작성하시오.
const classNames = (...args) => args.filter((el) => el).join(' ');
const ret2 = classNames('', 'a b c', 'd', '', 'e');

// ex6)Array.reduce 함수를 고차 함수로 직접 구현하시오.
const reduce = (arr, fn, initValue) => {
  if (!Array.isArray(arr)) return initValue;

  let i = 0;
  let result = initValue ?? ((i += 1), arr[0]);
  for (; i < arr.length; i += 1) {
    result = fn(result, arr[i]);
  }
  return result;
};

// ex7) 다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오. (1회전으로 처리!)
// → 배열의 각 요소를 제곱   n => n ** 2            [square]
// → 배열 각 요소의 제곱근   n => Math.sqrt(n)      [sqrt]
// → 배열의 각 요소를 세제곱  n => n ** 3            [cube]
const arr3 = [1, 2, 3, 4, 5];

const square = (el) => el ** 2;
const sqrt = (el) => Math.sqrt(el);
const cube = (el) => el ** 3;

const result = (arr, ...fn) =>
  fn.reduce((acc, fn) => arr.map((el) => fn(el), arr));

//TryThis. 수행 순서를 자유롭게 변경하도록 해보세요.

const result1 = (arr, ...fn) =>
  fn.reduce((acc, fn) => arr.map((el) => fn(el), arr));

[square, sqrt, cube].reduce;
[(cube, square, sqrt)].reduce;

//ex8) 다음과 같은 정수 배열을 생성하는 range 함수를 구현하시오.

const range = (start, end, step) => {
  const arr = [];

  if (start !== end && (end - start) * step < 0) return [];

  end ?? ((end = start >= 0 ? start : -1), (start = start <= 0 ? start : 1));
  step ?? (step = start === end ? 0 : (step = start > end ? -1 : 1));

  if (step === 0) return [start];

  const until = (x) => (step > 0 ? x <= end : x >= end);

  for (let i = start; until(i); i += step) {
    arr.push(i);
  }
  return arr;
};

/* ex9) /*다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때,
배열에서 합해서 N이되는 두 개의 요소(index)를 찾는 keyPair(arr, N)
함수를 작성하시오. (O(n^2) 이면 fail!!)
*/

const keyPair = (arr, target) => {
  const diffIdx = [];
  for (let i = 0; i < arr.length; i += 1) {
    const diff = target - arr[i];
    if (diffIdx[diff] !== undefined) return [diffIdx[diff], i];
    else diffIdx[arr[i]] = i;
  }
};
