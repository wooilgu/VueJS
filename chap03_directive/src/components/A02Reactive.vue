<!-- eslint-disable no-unused-vars -->
<script setup>
import { isReactive, isRef, reactive, ref } from 'vue';

const nickname = ref('Adam');
const changeNickname = (str) => (nickname.value = str);

// reactive는 값을 통째로 교체하지 않는다.
// reactive도 상태변수. 관련있는 자료를 묶어서 사용하고자 하는 경우
// templage => {{ state.name }} 형태로 사용
// setup => value를 붙이지 않고 state.name = value 형태와 같이 기존 방법을 사용
const state = reactive({
  name: 'Eve',
  age: 20,
  check: true,
  arr: [10, 11],
  user: { name: '방자', age: 20 },
});

const changeName = (str) => (state.name = str);
const changeAge = (num) => (state.age = num);
const changeCheck = () => (state.check = !state.check);
const addArray = () => {
  const random = Math.ceil(Math.random() * 100);
  state.arr.push(random);
};
const updateArray = (idx, value) => (state.arr[idx] = value);
const deleteArray = (idx) => state.arr.splice(idx, 1);

const addObject = (key, value) => (state.user[key] = value);
const updateObject = (key, value) => (state.user[key] = value);
const deleteObject = (key) => delete state.user[key];

/*
console.log(isReactive(state));       // true
console.log(isReactive(nickname));    // false

const name = state.name;
// 값을 꺼내면 ref 처럼 상태가 깨진다 (일반 값이다)
console.log(name, typeof name, isRef(name), isReactive(name));
*/

const message = ref('<b>Good Morning</b>');
const changeMessage = (str) => (message.value = `<b><i>${str}</i></b>`);
</script>

<template>
  <h3>A02 상태변수 - Reactive</h3>

  <div class="mb-3">
    Nickname: {{ nickname }}<br />
    Name: {{ state.name }}<br />
    Age: {{ state.age }}<br />
    Check: {{ state.check }}<br />
    Array: {{ state.arr[0] }} / {{ state.arr[1] }} / {{ state.arr[2] }}<br />
    Array: <br />
    User: {{ state.user.name }} / {{ state.user.age }} / {{ state.user.address }}<br />
  </div>

  <div class="mb-3">
    <button @click="() => changeNickname('Good Evening')">NICKNAME</button>
    <button @click="() => changeName('놀부')">NAME</button>
    <button @click="() => changeAge(300)">AGE</button>
    <button @click="changeCheck">CHECK</button>

    <button @click="addArray">ADD ARRAY</button>
    <button @click="() => updateArray(1, 3000)">UPDATE ARRAY</button>
    <button @click="() => deleteArray(1)">DELETE ARRAY</button>

    <button @click="() => addObject('address', 'Seoul')">ADD USER</button>
    <button @click="() => updateObject('address', 'Busan')">UPDATE USER</button>
    <button @click="() => deleteObject('address')">DELETE USER</button>
  </div>

  <div class="mb-3">
    <h5>2. 바인딩 연산</h5>
    일반적 연산: {{ 10 + 20 }}<br />
    속성 참조: {{ state.arr.length }} <br />
    속성 참조 연산: {{ state.arr.length * 100 }}<br />
    비교 연산: {{ state.arr[0] > 0 }}<br />
    비교 연산: {{ state.arr[0] && state.arr[1] > 0 }}<br />
    삼항 연산: {{ state.name === 'Adam' ? '관리자' : '일반 유저' }} <br />
    Value: {{ 10 }} / {{ '10' }} / {{ true }} / {{ 'true' }}
  </div>

  <div class="mb-3">
    <h5>3. 바인딩 관련 지시자</h5>
    보간법: {{ message }}<br />
    v-text: <span v-text="message"></span><br />
    <!-- v-html은 XSS 이슈 때문에 "신뢰된 문자열"에서만 사용 -->
    v-html: <span v-html="message"></span><br />
  </div>

  <div class="mb-3">
    <!-- 
      {{ 를 바인딩의 표현식으로 사용. 따라서 {{  }}를 표현할 수 없음
      v-pre는 {{   }}를 텍스트로 표시 
    -->
    v-pre: <span v-pre>{{ message }}</span
    ><br />
    <!-- v-once는 바인딩 후 상태변수의 값이 변경되도 값 변경을 하지 않는다. 최초 1번만 값 대입 -->
    v-once: <span v-once>{{ message }}</span
    ><br />
  </div>

  <div class="mb-5">
    <button v-on:click="changeMessage('Good Evening')">Change</button>
    <button @click="changeMessage('Good Afternoon')">Change</button>
  </div>
</template>

<!--
<script>
export default {
  // 상태변수 정의 - 값이 변경되면 즉각 변경된 값으로 화면이 갱신된다
  data() {
    return {
      name: 'Adam',
      num: 10,
      check: true,
      arr: [10, 11],
      user: { name: 'ABC', age: 100 },
      message: '<b>Good Morning</b>',
    };
  },
  // 위 data 값을 변경하는 이벤트 핸들러, 일반적인 함수가 여기 기술된다
  // 이때 함수의 매개변수가 없고, 어떠한 표시값(View에서 사용)을 반환하면 computed로 이동
  methods: {
    onAdd(x = 0, y = 0) {
      // console.log(this);           // 현재 Component
      return `${x} + ${y} = ${x + y}`;
    },
    onMin: () => {
      // console.log(this);
      return `10 - 5 = 5`;
    },

    // 이벤트 핸들러
    changeMessage(msg) {
      this.message = msg;
    },
    addArray() {
      this.arr.push(2000);
    },
  },
};
</script>

<template>
  <h3>A02 Binding</h3>
  바인딩 식 내부에서는 식만 사용 가능<br />
  <br />

  <div>
    <h5>1. 일반적 바인딩</h5>
    일반적인 단방향 바인딩: {{ name }}<br />
    Num: {{ num + 1 }}<br />
    Check: {{ check ? '동의' : '동의 안함' }}<br />
    배열: {{ arr[0] }} / {{ arr[1] }} / {{ arr[2] }} <br />
    객체: {{ user.name }} / {{ user.age }} / {{ user.address }}<br />
    함수의 리턴값: {{ onAdd(10, 20) }}<br />
    함수의 리턴값: {{ onMin() }}<br />
  </div>
  <br />

  <div>
    <h5>2. 바인딩 연산</h5>
    일반적 연산: {{ 1 + 2 }}<br />
    속성 참조: {{ arr.length }}<br />
    속성 참조 연산: {{ arr.length * 100 }}<br />
    비교 연산: {{ arr[0] > 0 }}<br />
    비교 연산: {{ arr[0] > 0 && arr[1] > 0 }}<br />
    삼항 연산: {{ arr[0] > 0 ? '0보다 큰 수' : '0보다 작은 수' }}<br />
  </div>
  <br />

  <div class="mb-5">
    <h5>3. 바인딩 관련 지시자</h5>
    보간법: {{ message }}<br />

    // v-XXX 형태로 시작되는 지시자는 "" 값이 변수 또는 자바스크립트의 표현식의 결과값이다
    v-text: <span v-text="message"></span><br />
    v-html: <span v-html="message"></span><br />
    v-once: <span v-once>{{ message }}</span> <br />

    // {{  }}를 바인딩 표기법이 아닌 일반 텍스트로 취급 
    v-pre: <span v-pre>{{ message }}</span
    ><br />
    <br />
    <button v-on:click="changeMessage('Good Evening')">Change</button>
    <button @click="addArray">Change</button>
    <br />
  </div>
</template>
-->
