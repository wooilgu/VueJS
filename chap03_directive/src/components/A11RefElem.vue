<script setup>
import { ref } from 'vue';

const message = ref('Good Morning');
</script>

<template>
  <h3>A11 Element 참조</h3>

  <form class="mb-3">
    <div class="input-group">
      <input type="text" class="form-control" name="message">
      <button type="submit" class="btn btn-danger">ADD</button>
    </div>
  </form>

  <div class="mb-5">
    Message: {{message}}
  </div>  
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