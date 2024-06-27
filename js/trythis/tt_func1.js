/* 함수를 한번만 실행하게 하는 once 함수를 작성하시오.
ex)
const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined

*/
const once = (fn) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      return fn.apply(this, args);
    }
  };
};

const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined

/*try this
once function을 n초 후 다시 실행할 수 있도록 개선해보세요.
(test 요령: 0.1초 한 번씩 실행하게 해놓고, 1초 후에 초기화)

*/

const once2 = (fn, delay) => {
  let timer;
  let done = false;
  return (...args) => {
    if (timer) return;
    if (!done) {
      done = true;
      fn.apply(this, args);
      timer = setTimeout(() => {
        fn(...args);
        timer = null;
        done = false;
      }, delay);
    }
  };
};

const fn2 = once2(
  (x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`,
  1000
);

fn2(1, 6); // 금일 운행금지 차량은 끝번호 1, 6입니다!
