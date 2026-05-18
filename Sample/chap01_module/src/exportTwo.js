const jumsu = (function () {
  const progName = '점수 프로그램';
  const name = `놀부 / `;

  const getName = function () {
    return name;
  };
  const getTotal = function (x, y) {
    return x + y;
  };
  const getAvg = function (total, num) {
    return total / num;
  };

  return getName;
})();
// console.log(jumsu);

// 파일에서 딱 1개만 export 되는 경우 default를 사용
// default가 2번 오면 에러

// export default { name: 'A', age: 20 }        // Error

// 개별 export는 default와는 별개로 얼마든지 선언 가능
const x = 10;
const y = 20;
