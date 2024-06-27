// range 함수는 세 개의 인자를 받는다.
// 첫 번째 인자는 배열의 시작 값이다.
// 두 번째 인자는 배열의 끝 값이다.
// 세 번째 인자는 배열의 간격을 나타낸다. (생략 가능)
// 세 번째 인자가 양수일 경우 배열의 값이 증가하고, 음수일 경우 배열의 값이 감소한다.
// 세 번째 인자가 생략되면 1이 된다.
// 시작 값은 끝 값보다 작을 수도, 클 수도 있다.
// 시작 값이 끝 값과 같은 경우 배열에 시작 값만 포함한다.
// 시작 값이 끝 값보다 클 경우 빈 배열을 반환한다.
// 끝 값이 시작 값보다 클 경우 빈 배열을 반환한다.

//다음과 같은 정수 배열을 생성하는 range 함수를 구현하시오.

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
const printFn = (...args) => console.log(...args);

printFn(range(1, 10, 1)); //
printFn(range(1, 10, 2)); // [1, 3, 5, 7, 9]

printFn(range(1, 10)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
printFn(range(10, 1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
printFn(range(10, 1, -2)); // [10, 8, 6, 4, 2]
printFn(range(5)); // [1, 2, 3, 4, 5]
printFn(range(100)); // [1, 2, 3, 4, 5, …, 99, 100]
printFn(range(-5)); // [-5, -4, -3, -2, -1]
printFn(range(5, 5)); // [5]
printFn(range(1, 5, 0)); // [1]
printFn(range(5, 5, 0)); // [5]
printFn(range(0, 5)); // [0, 1, 2, 3, 4, 5]
printFn(range(5, 5, -1)); // [5]
printFn(range(0, -1)); // [0, -1]
printFn(range(5, 1, 1)); // []
printFn(range(0, -3)); // [0, -1, -2, -3]
printFn(range(1, 5, -1)); // []
printFn(range(-3, 0)); // [-3, -2, -1, 0]
printFn(range(1, 5, 6)); // [1]
printFn(range(5, 1)); // [5, 4, 3, 2, 1]
printFn(range(0)); // [0]
printFn(range(0, 0)); // [0]
printFn(range(0, 0, 5)); // [0]
printFn(range(2, 1, -5)); // [2]
printFn(range(0, -1, -5)); // [0]
