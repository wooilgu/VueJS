<script setup>
import { ref } from 'vue';

const num = ref(10);
const name = ref('NolBu');
const arr = ref([10, 20]);
const user = ref({ name: 'HungBu', age: 20 })

const changeNum = () => num.value = 20;
const changeUser = () => user.value.name = '흥부';
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
    <button class="btn btn-primary">NumEvent</button>{{ ' ' }}
    <button class="btn btn-primary">ObjEvent</button>
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
