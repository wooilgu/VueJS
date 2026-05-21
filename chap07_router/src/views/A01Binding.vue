<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref } from 'vue';

let nickname = 'Adam';
const changeNickName = () => nickname = 'John';

const name = ref('NolBu');
const changeName = (str) => name.value = str;

const age = ref(20);
const check = ref(true);
const arr = ref([10, 11]);
const user = ref({name: 'HangDan', age: 22});

const onAdd = (x = 0, y = 0) => `${x} + ${y} = ${x + y}`;
</script>

<template>
  <h3>상태변수 - Ref</h3>

  <div class="mb-3">
    <div class="mb-2 v-cloak">
      Nickname: {{ nickname }}
    </div>

    <p>
      Name: {{ name }}<br />
      Age: {{ age }}<br />
      Check: {{ check ? '동의' : '동의 안함' }}<br />
      Array: {{ arr[0] }} / {{ arr[1] }} / {{ arr[2] }}<br />
      User: {{ user.name }} / {{ user.age }} / {{ user.address }}<br />
      onAdd: {{ onAdd(10, 20) }} / {{ onAdd() }}
    </p>
  </div>
</template>

