//다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오.
//→ 배열의 각 요소를 제곱   n => n ** 2            [square]
//→ 배열 각 요소의 제곱근   n => Math.sqrt(n)      [sqrt]
// → 배열의 각 요소를 세제곱  n => n ** 3            [cube]
const arr = [1, 2, 3, 4, 5];
//cf. arr.map(a => a ** 2).map(a => Math.sqrt(a)).map(a => a ** 3);
// ⇒⇒⇒ 결과 => [ 1, 8, 27, 64, 125 ]

const square = (el) => el ** 2;
const sqrt = (el) => Math.sqrt(el);
const cube = (el) => el ** 3;

const result = (arr, ...fn) =>
  fn.reduce((acc, fn) => arr.map((el) => fn(el), arr));

console.log(result(arr, square, sqrt, cube));

//TryThis. 수행 순서를 자유롭게 변경하도록 해보세요.
const result1 = (arr, ...fn) =>
  fn.reduce((acc, fn) => arr.map((el) => fn(el), arr));

console.log(result1(arr, cube, square, sqrt));
console.log(result1(arr, square, cube, sqrt));
console.log(result1(arr, cube, sqrt, square));
console.log(result1(arr, sqrt, cube, square));
console.log(result1(arr, sqrt, square, cube));
