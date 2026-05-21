<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref } from 'vue';

const emits = defineEmits(['searchEvent']);

/*
const keyword = ref('')
const sendData = () => {
  if(keyword.value.trim().length >= 2) {
    emits('searchEvent', keyword.value)
  }
}
*/
// const keyRef = ref(null)
const sendData = () => {
  // const elem = keyRef.value;
  const elem = document.querySelector('input');
  if (elem.value.trim().length >= 2) {
    emits('searchEvent', elem.value);
  }
};
</script>

<template>
  <form>
    <div class="input-group">
      <!-- <input type="text" class="form-control" v-model="keyword"/> -->
      <input type="text" class="form-control" />
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendData">Submit</button>
      </div>
    </div>
  </form>
</template>

<!-- 
<script>
export default {
  emits: ['searchEvent'],
  methods: {
    sendKeyword() {
      const value = this.$refs.searchRef.value.trim()
      if (value.length >= 2) {
        this.$emit('searchEvent', value)
      }
    },
  },
}
</script>

<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" ref="searchRef" />
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendKeyword">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>
-->
