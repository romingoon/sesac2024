//다음을 수행하시오.
const arr2 = [1, 2, 3, 4, 5];
// ex1) [2,3]을 추출
const ex1 = arr2.slice(1, 3);
console.log('[2,3]을 추출 : ', ex1);
// ex2) [3]부터 모두 다 추출
const ex2 = arr2.slice(2);
console.log('[3]부터 모두 다 추출: ', ex2);
// ex3) [2,3,4] 제거하기
arr2.splice(1, 3);
console.log('[2,3,4] 제거하기 :', arr2);
// ex4) 복원하기
arr2.splice(1, 0, 2, 3, 4);
console.log('복원하기:', arr2);
// ex5) [3] 부터 끝까지 제거하기
arr2.splice(2);
console.log('[3]부터 끝까지 제거하기: ', arr2);
// ex6) 복원하기
arr2.splice(2, 0, 3, 4, 5);
console.log('복원하기: ', arr2);
// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
arr2.splice(2, 1, 'X', 'Y', 'Z');
// console.log(arr2);
// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
// arr2.copyWithin(2, 0, 'X', 'Y', 'Z');
// console.log(arr2);

const arr3 = [1, 2, 3, 4, 5];
const arr4 = ['X', 'Y', 'Z'];
const result = arr3.slice(0, 2).concat(arr4, arr3.slice(3));

console.log('slice/concat : ', result);
