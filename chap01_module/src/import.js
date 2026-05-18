
// 개별 요소를 import
// export된 변수명과 동일한 이름으로 { } 안에 정의
// as를 이용해 변수명을 변경할 수 있다. 이때는 반드시 변경된 변수명만 사용 가능

// 사용하는 HTML의 type이 반드시 module이여야 한다
// import { name as nick, age, check, arr, user, add } from './exportOne.js';

// 개별 export 되는 요소가 많은 경우 1개 이름으로 묶어서 사용
import * as one from './exportOne.js';


// default를 import
// 중복되지 않는 임의의 변수명으로 { } 없이 정의
import two from './exportTwo.js'
import { x, y } from './exportTwo.js'
// console.log(two);

// console.log($)
// import { $ } from 'jquery'

// 반드시 default를 먼저 정의해야 한다.


const name = 'Adam';

const dom = `
  Name: ${name} /  <br>
  Age: ${age} <br>
  Check:  ${check ? '동의' : '동의안함'}<br>
  Array: ${arr[0]} / ${arr[1]} / ${arr[2]} <br>
  Object: ${user.name} / ${user.age} <br>
  Function: <br>
  <br>

  pName: ${two.pName} <br>
  getTotal: ${two.getTotal(100, 90)} <br>
  getAvg:  ${two.getTotal(190, 2)} <br>
  getName:  ${two.getName} <br>
  X: , Y:  <br>
`;

// console 출력
console.log(dom);

// DOM에 출력
document.getElementById('app').innerHTML = dom;
