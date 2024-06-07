//오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.

// switch문 사용
const today = new Date().getDay();

switch (today) {
  case 0:
    console.log('오늘은 일요일입니다.');
    break;
  case 1:
    console.log('오늘은 월요일입니다.');
    break;
  case 2:
    console.log('오늘은 화요일입니다.');
    break;
  case 3:
    console.log('오늘은 수요일입니다.');
    break;
  case 4:
    console.log('오늘은 목요일입니다.');
    break;
  case 5:
    console.log('오늘은 금요일입니다.');
    break;
  case 6:
    console.log('오늘은 토요일입니다.');
    break;
}

// switch문 사용하지 않는 방법
const WEEK_NAMES = '일월화수목금토';
console.log(`오늘은 ${WEEK_NAMES[today]}요일입니다.`);
