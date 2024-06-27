const assert = require('assert');

//ex1) 배열의 각 원소를 String으로 변환하시오.

const arr = [1, 2, 3, true];
const ret1 = arr.map((el) => el.toString());

assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);
console.log(ret1);

//</이>ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
const classNames = (...args) => args.filter((el) => el).join(' ');

const ret2 = classNames('', 'a b c', 'd', '', 'e');

console.log(ret2);
assert.strictEqual(ret2, 'a b c d e');
// 주의: ' a b c d  e'면 안됨!!
// cf. example in React
// <div classNames=({x ? 'a b' : ''}, {'' ? 'c' : ''}, {z && 'e f'})
