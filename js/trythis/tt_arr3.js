//아래 users 배열에 대하여 추가/수정/삭제하는 순수 함수를 작성하시오.

const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };

const users = [kim, lee, park]; // 오염되면 안됨!!
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

console.log(users.addUser(hong));
console.log(users.removeUser(lee));
console.log(users.changeUser(kim, choi));
console.log(users);
