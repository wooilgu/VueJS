// 개별 요소를 import
// export된 변수명과 동일한 이름으로 { } 안에 정의
// as를 이용해 변수명을 변경할 수 있다. 이때는 반드시 변경된 변수명만 사용 가능


// 개별 export 되는 요소가 많은 경우 1개 이름으로 묶어서 사용



// default를 import
// 중복되지 않는 임의의 변수명으로 { } 없이 정의


// 반드시 default를 먼저 정의해야 한다.


const name = 'Adam';

const dom = `
  Name:  <br>
  Age: <br>
  Check:  <br>
  Array: <br>
  Object: <br>
  Function: <br>
  <br>

  pName: <br>
  getTotal:  <br>
  getAvg:  <br>
  getName:  <br>
  X: , Y:  <br>
`;

// console 출력
console.log(dom);

// DOM에 출력
