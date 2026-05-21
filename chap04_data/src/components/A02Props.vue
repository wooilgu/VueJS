<script setup>
import { ref } from 'vue';

import A02PropsOne from './children/A02PropsOne.vue';
import A02PropsTwo from './children/A02PropsTwo.vue';

// 상태변수 변경 권한은 상태 변수를 정의한 컴포넌트에 한정된다
const address = ref('Seoul');
const arr = ref([10, 11]);
const user = ref({ name: 'Adam', age: 20 });

const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

// onAdd를 속성의 값으로 전달하듯이 부모의 상태를 변경하는 이벤트 핸들러도
// 자식 컴포넌트에 속성으로 전달 => 자식이 호출 => 부모의 이벤트 핸들러 실행됨 =>
// 부모의 상태 변경 => 부모 리 렌더링 => 자식 리 렌더링(값 동기화 완료)
const changeAddress = (str) => (address.value = str);
const updateArray = (idx, value) => (arr.value[idx] = value);
const changeUserName = (value) => (user.value.name = value);
</script>

<template>
  <h3>A02 Props</h3>

  <div class="mb-3">
    <!-- 
      1. 값 전달은 속성을 이용. key=value(HTML 요소의 속성 방식) 형태로 지정
      2. today 속성은 특별한 지시 값을 전달
        => 자식은 값을 받아서 그 값을 기준으로 새로운 값을 생성해서 사용
        => EX] time 값이 전달되면 시간 출력, data 전달되면 날짜 출력
    -->
    <A02PropsOne
      today="date"
      name="놀부"
      v-bind:age="10"
      :check="true"
      isChecked
      :add="address"
      :arr="arr"
      :user="user"
      :onAdd="onAdd"
      :updateArray="updateArray"
      :changeUserName="changeUserName"
    ></A02PropsOne>
    <A02PropsOne today="time"></A02PropsOne>
  </div>

  <div class="mb-3">
    <A02PropsTwo
      today="date"
      name="흥부"
      v-bind:age="10"
      :check="true"
      isChecked
      :add="address"
      :arr="arr"
      :user="user"
      :onAdd="onAdd"
    ></A02PropsTwo>
    <A02PropsTwo today="date"></A02PropsTwo>
  </div>

  <div class="mb-5">
    <button @click="() => changeAddress('부산')">ADDRESS</button>
  </div>
</template>

<!-- 
<script>
import A02PropsOne from './children/A02PropsOne.vue'
import A02PropsTwo from './children/A02PropsTwo.vue'

export default {
  components: { A02PropsOne, A02PropsTwo },
  data() {
    return {
      address: 'Seoul',
      arr: [10, 20],
      user: { name: 'HungBu', age: 30 },
    }
  },
  methods: {
    onAdd(x, y) {
      return `${x} + ${y} = ${x + y}`
    },
    changeAddress(x) {
      this.address = x
    },
  },
}
</script>

<template>
  <h3>A02 Props</h3>

  <div class="mb-5">
    <A02PropsOne type="date" name="놀부" v-bind:age="30" :add="address" :arr="arr" :user="user" :onAdd="onAdd" :changeAddress="changeAddress"></A02PropsOne>
    <A02PropsOne type="time" name="흥부" :add="address"></A02PropsOne>

    <A02PropsTwo  type="date" name="놀부" v-bind:age="30" :add="address" :arr="arr" :user="user" :onAdd="onAdd" :changeAddress="changeAddress"></A02PropsTwo>

    <button @click="() => changeAddress('부산')">ADDRESS</button>
  </div>
</template>
-->
