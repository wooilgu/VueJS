<script setup>
import { onMounted, ref } from 'vue';

// DOM 요소 참조: 참조할 요소에 ref="elem" 형태로 연결한다
const elem = ref(null);
const btnElem = ref(null);

const message = ref('Good Morning');
const changeMessage = () => {
  // const inputElem = document.querySelector('input[name="message"]');
  // message.value = inputElem.value.trim();

  message.value = elem.value.value.trim();
};

// setup은 아직 template을 읽기 전
// btnElem.value.style.color = 'black'      // Error
onMounted(() => {
  btnElem.value.style.color = 'black';
  btnElem.value.style.fontWeight = 'bold';
});
</script>

<template>
  <h3>A11 Element 참조</h3>

  <form class="mb-3">
    <div class="input-group">
      <input type="text" class="form-control" name="message" ref="elem" />
      <button type="submit" class="btn btn-danger" ref="btnElem" @click.prevent="changeMessage">
        ADD
      </button>
    </div>
  </form>

  <div class="mb-5">Message: {{ message }}</div>
</template>

<!--
<script>
export default {
  data() {
    return {
      message: 'Hello World',
    };
  },
  methods: {
    changeMessage() {
      // const elem = document.querySelector('input[name="msg"]');
      // console.log(elem);
      // console.log(elem.name, elem.className, elem.type);

      // 1. 참조하려는 요소에 ref="참조명"
      // 2. 참조는 "this.$refs.참조명"로 참조"

      // console.log(this.$refs);
      const elem = this.$refs.inputRef; // document.querySelector('input[name="msg"]');
      this.message = elem.value;

      this.$refs.btnRef.style.backgroundColor = 'orange';
    },
  },
};
</script>

<template>
  <h3>A11 Refs</h3>

  <form class="mb-3">
    <div class="input-group">
      <input type="text" class="form-control" name="msg" ref="inputRef" />
      <button type="submit" class="btn btn-danger" ref="btnRef" @click.prevent="changeMessage">ADD</button>
    </div>
  </form>

  <div class="mb-5">Message: {{ message }}</div>
</template>
-->
