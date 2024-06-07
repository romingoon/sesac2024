//1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오.
// Math.sqrt() 사용, 무리수만 출력!

for (let i = 1; i <= 10; i += 1) {
  if (Math.sqrt(i) % 1 !== 0) {
    console.log(i, Math.sqrt(i).toFixed(3));
  }
}
