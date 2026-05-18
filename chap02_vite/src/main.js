
import { name as nick, age, check, arr, user, add } from './exportOne.js';
import * as one from './exportOne.js'
import two, { x, y } from './exportTwo.js'

// 외부 라이브러리 - package.json의 main에 src/jquery.js가 설정되어 있음
import { $ } from 'jquery'

// CSS 파일의 이용 - package.json의 main에 src/js/boostrap.js가 설정되어 있음
import 'bootstrap/dist/css/bootstrap.css'

// 외부 이미지 파일
import img from '/images/one.png'

const name = 'Adam';
const dom = `
  <img src="${img}" alt="사진" width="100"><br>

  Name: ${name} / ${nick} / ${one.name} <br>
  Age: ${age} / ${one.age} <br>
  Check: ${check ? '동의' : '동의 안함'} / ${one.check} <br>
  Array: ${arr[0]} / ${arr[1]} / ${arr[2]} / ${one.arr[1]} <br>
  Object: ${user.name} / ${user.age} / ${user.address} / ${one.user.name} <br>
  Function: ${add(10, 20)} / ${one.add(20, 30)} <br>
  <br>

  pName: ${two.pName}<br>
  getTotal: ${two.getTotal(100, 90)} <br>
  getAvg: ${two.getTotal(190, 2)} <br>
  getName: ${two.getName()} <br>
  X: ${x}, Y: ${y} <br>
`;

// console 출력
console.log(dom);

// DOM에 출력
document.getElementById('app').innerHTML = dom;

// jQuery로 출력
$('#root').html(dom);

