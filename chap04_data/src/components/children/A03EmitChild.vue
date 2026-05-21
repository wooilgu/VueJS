<script setup>
import { onUnmounted, ref, watch } from 'vue';

const num = ref(10);
const name = ref('NolBu');
const arr = ref([10, 20]);
const user = ref({ name: 'HungBu', age: 20 });

const changeNum = () => (num.value = 20);
const changeUser = () => (user.value.name = '흥부');

// 부모 컴포넌트에게 값 전달 => Event를 이용한다
// 1. 커스텀 이벤트를 생성한다
const emits = defineEmits(['numEvent', 'objEvent']);

const sendNumber = () => {
  // 2. 이벤트를 발생
  emits('numEvent', num.value); // 상태를 전달하지 말고, 값으로 전달한다
};
const sendObject = () => {
  // 2. 이벤트를 발생
  emits('objEvent', {
    num: num.value,
    name: name.value,
    arr: [...arr.value], // ...arr.value => arr: 10, 20
    user: { ...user.value },
    changeNum,
    changeUser,
  });
};

// 부모에서 값을 변경 => 자식 요소의 상태 변경 => 자식 화면만 갱신
// 부모의 값은 항상 이벤트로 전달되는데 값 변경 후 다시 이벤트를 발생 안함 => 부모 변경 안됨
const numWatch = watch(num, () => sendNumber());
const objWatch = watch(
  () => [num.value, name.value, user.value.name],
  () => sendObject(),
);

onUnmounted(() => {
  numWatch();
  objWatch();
});
</script>

<template>
  <h5>A03 Emits Child Component</h5>

  <div class="mb-3">
    Num: {{ num }}<br />
    Name: {{ name }}<br />
    User: {{ user.name }}<br />
  </div>

  <div class="mb-5">
    <button @click="changeNum">NUM</button>
    <button @click="changeUser">USER</button>
  </div>

  <div class="mb-5">
    <button class="btn btn-primary" @click="sendNumber">NumEvent</button>{{ ' ' }}
    <button class="btn btn-primary" @click="sendObject">ObjEvent</button>
  </div>
</template>

<!-- 
<script>
export default {
  emits: ['numEvent', 'objEvent'], // custom event 등록
  data() {
    return {
      num: 10,
      name: 'NolBu',
      arr: [10, 20],
      user: { name: 'HungBu', age: 20 },
    }
  },
  methods: {
    sendNumber() {
      // $emit은 지정한 이벤트명으로 이벤트를 발생
      // this.$emit('이벤트명', 전송할 값);
      this.$emit('numEvent', this.num)
    },
    sendData() {
      const data = {
        childName: 'A03 Emit Child Component',
        num: this.num,
        name: this.name,
        arr: this.arr,
        user: this.user,
      }
      this.$emit('objEvent', data)
    },
  },
}
</script>

<template>
  <h5>A03 Emits Child Component</h5>

  <div class="mb-3">
    Num: {{ num }}<br />
    Name: {{ name }}<br />
    User: {{ user.name }}<br />
  </div>

  <div class="mb-5">
    <button @click="sendNumber">Num</button>
    <button @click="sendData">Data</button>
  </div>
</template>
-->
