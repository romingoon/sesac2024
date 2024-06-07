//오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.

// switch문 사용
const today = new Date().getDay();
function getDayName(day) {
  switch (day) {
    case 0:
      date = '일요일';
      break;
    case 1:
      date = '월요일';
      break;
    case 2:
      date = '화요일';
      break;
    case 3:
      date = '수요일';
      break;
    case 4:
      date = '목요일';
      break;
    case 5:
      date = '금요일';
      break;
    case 6:
      date = '토요일';
      break;
  }
  return console.log(`오늘은 ${date}입니다.`);
}
getDayName(today);
// switch문 사용하지 않는 방법
const WEEK_NAMES = '일월화수목금토';
console.log(`오늘은 ${WEEK_NAMES[today]}요일입니다.`);
