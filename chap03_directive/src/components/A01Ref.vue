
<script setup>
import { ref } from 'vue';

// 일반변수
let count = 10;
const increaseCount = () => count++;

// 변수의 값이 변경되면 변경된 값을 기반으로 화면을 재 갱신하는 변수 => 상태변수
// 이 상태변수는 값이 변경되면 즉각 변경된 값 기반으로 화면을 재 구성한다
// template에서는 "변수명"으로 참조
// setup에서는 "변수명.value"로 참조
const name = ref('Adam');
const age = ref(20);
const check = ref(true);
const arr = ref([10, 11]);
const user = ref({ name: '홍길동', age: 30});

const onAdd = (x=0, y=0) => `${x} + ${y} = ${x + y}`;

// 상태 변수 변경
// console.log(name);
const changeName = (x) => name.value = x;
</script>

<template>
  <h3>A01 상태변수 - Ref</h3>

  <div class="mb-3">
    <div class="mb-2">
      Count: {{ count }}
    </div>

    <p>
      변수의 값이 undefined, null 인 경우는 화면에 아무것도 표시하지 않는다. <br>
      Name: {{ name }}<br />
      Age: {{ age }} <br />
      Check: {{ check ? '동의' : '동의 안함' }} <br />
      Array: {{ arr[0] }} / {{ arr[1] }} / {{ arr[2] }} <br />
      User: {{ user.name }} / {{ user.age }} / {{ user.address }} <br />
      Function: {{ onAdd(10, 20) }}
    </p>
  </div>

  <div class="mb-5">
    <button @click="increaseCount()">INC</button>
    <button @click="changeName('방자')">NAME</button>
    <button>AGE</button>
    <button>CHECK</button>

    <button>ADD ARRAY</button>
    <button>UPDATE ARRAY</button>
    <button>DELETE ARRAY</button>

    <button>ADD USER</button>
    <button>UPDATE USER</button>
    <button>DELETE USER</button>
  </div>
</template>

<style scoped>
  [v-cloak] {
    display: none;
  }
</style>

