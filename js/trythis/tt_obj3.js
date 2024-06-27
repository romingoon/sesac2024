// 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 또는 spread(...) 연산자를 사용하지 말고 작성하시오.
const kim = { nid: 3, nm: 'Kim', addr: 'Pusan' };

//shallo Copy
const shallowCopyObject = (obj) => {
  const result = {};
  for (const key in obj) {
    result[key] = obj[key];
  }
  return result;
};

const newKim = shallowCopyObject(kim); // shallow or deep copy
newKim.addr = 'Daegu';
console.log(kim.addr !== newKim.addr); // true면 통과!

//deep Copy
const deepCopyObject = (obj) => {
  const result = {};
  for (const key in Object.Reflect.ownKeys(obj)) {
    if (typeof obj[key] === 'object') {
      result[key] = deepCopyObject(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
};

const newKim2 = deepCopyObject(kim); // shallow or deep copy
newKim2.addr = 'Daegu';
console.log(kim.addr !== newKim.addr); // true면 통과!
