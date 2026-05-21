<script setup>
import { computed, ref } from 'vue';

const count = ref(10);
const incCount = () => count.value++;

/*
  props는 읽기 전용. props 변수명은 script 내부에서 참조하는 경우 필요하다
  참조형 변수의 기본값은 항상 함수의 리턴값으로 반환해야 한다
  함수는 default 자체가 기본 함수로 동작한다

  자바스크립트는 호출한 변수의 값이 "", 0, -0, undefined, null, NaN, false 값이면 모두 false로 취급한다
  그 이외에 어떻한 값이라도 있으면 true로 취급함
*/
const props = defineProps({
  today: { type: String, required: true },
  name: { type: String, default: 'UNKNOWN' },
  age: { type: Number },
  check: { type: Boolean, default: true }, // 속성을 전달하지 않으면 false. default로 기본값 맞춤
  isChecked: { type: Boolean, default: true }, // 기본값 true. default로 기본값 맞춤
  add: {
    type: String,
    // val는 전달되는 값 - 넘어오는 값이 없으면 체크 안함
    validator: (val) => (val.length >= 2 ? true : false),
  },
  // 객체
  arr: {
    type: Array,
    // required: true,

    // 객체의 default의 값은 반드시 함수의 반환값 형태로 기술해야 한다.
    default: () => ['', ''],
    // default 값도 체크 대상이다.
    validator: (val) => {
      return val.length >= 2 ? true : false;
    },
  },
  user: {
    type: Object,
    // required: true,

    // 객체의 default의 값은 반드시 함수의 반환값 형태로 기술해야 한다.
    // JavaScript에서 객체명.속성명 형태로 값이 있는지 체크할때는 값이
    // 0, -0, '', undefined, null, NaN는 모두 값 없음 취급한다 (false)
    default: () => ({ name: 'A', age: 1 }),
    // default 값도 체크 대상이다.
    validator: (val) => {
      return val.name && val.age ? true : false;
    },
  },
  onAdd: {
    type: Function,
    default: () => '이 함수 자체가 기본값으로 실행된다.',
    // default 값도 체크 대상
    validator: (val) => (typeof val(2, 3) === 'string' ? true : false),
  },
  updateArray: { type: Function, default: () => {} },
  changeUserName: { type: Function, default: () => {} },
});
// console.log(props.today)
const now = computed(() => {
  const now = new Date();

  switch (props.today) {
    case 'time':
      return now.toLocaleTimeString();
    case 'date':
      return now.toLocaleDateString();
    default:
      return now.toLocaleString();
  }
});
</script>

<template>
  <h5>A02 Props One Component</h5>

  <div class="mb-3">
    Count: {{ count }} <br />
    <button @click="incCount">+</button>
  </div>

  <div class="mb-5">
    Type / {{ today }}: {{ now }}<br />
    Name: {{ name }} <br />
    Age: {{ age }} <br />
    Check: {{ check }}<br />
    isChecked: {{ isChecked }} <br />
    Address: {{ add }} <br />
    Array: {{ arr[0] }} / {{ arr[1] }} / {{ arr[2] }}<br />
    User: {{ user.name }} / {{ user.age }} / {{ user.address }} <br />
    onAdd: {{ onAdd(20, 30) }} <br />
  </div>

  <div class="mb-5">
    <button class="btn btn-primary" @click="(evt) => updateArray(1, 3000)">Update Array</button>
    <button class="btn btn-danger" @click="(evt) => changeUserName('향단')">User Name</button>
  </div>
</template>

<!-- 
<script>
export default {
  // 부모가 전달한 속성을 정의 [읽기 전용]
  props: {
    type: { type: String, required: true },
    name: { type: String, default: 'Unknown' },
    age: { type: Number, default: 0 }, // default 값도 type과 매칭되어야 한다
    add: { type: String, default: 'Unknown' },
    arr: {
      type: Array,
      default: () => ['', ''], // default 값도 validator의 대상이 된다
      validator: (arg) => {
        return arg.length >= 2 ? true : false
      },
    },
    user: {
      type: Object,
      default: () => ({ name: ' ', age: ' ' }),
      validator: (arg) => {
        // JavaScript에서는 조건굼에서 변수의 값이
        // '', 0, -0, NaN, undefined, null, false면 모두 false로 판단한다
        return arg.name && arg.age ? true : false
      },
    },
    onAdd: {
      type: Function,
      // default 함수 자체가 기본 함수로 사용된다
      default() {
        return ''
      },
      validator(arg) {
        return typeof arg(1, 2) === 'string' ? true : false
      },
    },
    changeAddress: {
      type: Function,
      default() {},
      validator(arg) {
        return typeof arg === 'function' ? true : false
      },
    },
  },
  data() {
    return {}
  },
  computed: {
    today() {
      const now = new Date()
      switch (this.type) {
        case 'time':
          return now.toLocaleTimeString()
        case 'date':
          return now.toLocaleDateString()
        default:
          return now.toLocaleString()
      }
    },
  },
}
</script>

<template>
  <h5>A02 Props Child ONE</h5>

  <div class="mb-5">
    Today: {{ this.type }}: {{ today }}<br />
    Name: {{ name }}<br />
    Age: {{ age + 1 }}<br />
    Address: {{ add }}<br />
    Array: {{ arr[0] }} / {{ arr[1] }} / {{ arr[2] }}<br />
    User: {{ user.name }} / {{ user.age }} / {{ user.address }}<br />
    Function: {{ onAdd(10, 20) }}<br />
    <button @click="() => changeAddress('경기')">Address</button>
  </div>
</template>
-->
