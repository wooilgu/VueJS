<!-- eslint-disable no-unused-vars -->
<script setup>
import { reactive, ref } from 'vue';
import A03EmitChild from './children/A03EmitChild.vue';

const num = ref(0);
// const state = reactive({...})    // 값을 통으로 변경 안됨. state = evt(에러)
const state = ref({
  num: '',
  name: '',
  arr: [],
  user: {},
  changeNum: () => {},
  changeUser: () => {},
});

const getNumber = (evt) => {
  // 4. 자식 컴포넌트에서 사용자 이벤트가 발생되면 전달된 값이 evt
  // 그 값을 현재 컴포넌트의 상태변수에 대입 => 화면 갱신
  console.log(evt);
  num.value = evt;
};
const getObject = (evt) => {
  console.log(evt);
  state.value = evt;

  // reactive로 정의한 경우는 하나씩 대입 => 변경으로만 사용
  // state.num = evt.num;
  // state.name = evt.name;
};
</script>

<template>
  <h3>A03 Emits</h3>

  <div class="mb-3">
    Number: {{ num }}<br />

    <!-- 
      data는 객체. 객체의 속성값이 없으면 에러가 아닌 undefined. vue는 null과 undefined는 화면 출력 안함 
    -->
    Number: {{ state.num }} <br />
    Name: {{ state.name }} <br />

    <!-- 
      data 객체는 존재. arr 객체는 존재 안함. 없는 객체(undefined)에 
      undefined[0], undefined.name, undefined() 형태로는 사용할 수 없다
    -->
    Array: {{ state.arr?.[0] }} / {{ state.arr?.[1] }} / {{ state.arr?.[2] }} <br />
    User: {{ state.user?.name }} / {{ state.user?.age }} / {{ state.user?.address }}<br />
    <button @click="state.changeNum">NUM</button>
    <button @click="state.changeUser">USER</button>
  </div>

  <hr />

  <div class="mb-5">
    <!-- 3. 이벤트가 발생하면 감지 후 실행할 메서드를 지정 -->
    <A03EmitChild @numEvent="getNumber" @objEvent="getObject($event)"></A03EmitChild>
  </div>
</template>

<!-- 
<script>
import A03EmitChild from './children/A03EmitChild.vue'

export default {
  components: { A03EmitChild },
  data() {
    return {
      num: '',
      data: { num: '', address: '', arr: [], user: {} },
    }
  },
  methods: {
    getNumber(evt) {
      // console.log(evt);
      this.num = evt
    },
    getData(evt) {
      // console.log(evt)
      this.data = evt
    },
  },
}
</script>

<template>
  <h3>A03 Emits</h3>

  <div class="mb-3">
    Number: {{ num }} <br />
    Number: {{ data.num }}<br />
    Name: {{ data.name }}<br />
    Array: {{ data.arr?.[0] }} / {{ data.arr[1] }} / {{ data.arr?.[2] }}<br />
    User: {{ data.user?.name }} / {{ data.user.age }} / {{ data.user?.address }}<br />
  </div>

  <hr />

  <div class="mb-5">
    <A03EmitChild @numEvent="getNumber" @objEvent="getData"></A03EmitChild>
  </div>
</template>
-->
