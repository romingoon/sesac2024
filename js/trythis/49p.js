//for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.
//for(let i = 0.1; i < 1; i = i + 0.1) console.log(i);  // right??

// for (let i = 0.1; i <= 1; i += 0.1) {
//   i = Math.round(i * 10) / 10;
//   console.log(i);
// }

const operator = (a, b, c) => {
  for (let i = a; i <= b; i += c) {
    console.log(Math.round(i * 10) / 10);
  }
};

operator(0.1, 1, 0.1);

for (let i = 0.1; i < 1; i = i + 0.1) console.log(Number(i.toPrecision)); // right??
