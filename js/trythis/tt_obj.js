// 129p trythis

const arr = [100, 200, 300, 400, 500, 600, 700];

console.log('--- 1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.');

for (let key in arr) {
  console.log(key);
}

console.log('--- 2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)');
for (let value of arr) {
  console.log(value);
}

const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false };

console.log('--- 3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.');
for (let el in obj) {
  console.log(el);
}

console.log('--- 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.');
for (const el in obj) {
  console.log(obj[el]);
}

console.log('--- 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.');

for (let el of Object.values(obj)) {
  console.log(el);
}

console.log(
  '--- 6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오. // Object.defineProperty'
);
Object.defineProperty(obj, 'level', { enumerable: false });
console.log(obj);
console.log(
  '--- 7. role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty )'
);
Object.defineProperty(obj, 'role', { writable: false });
