<script setup>
import { ref } from 'vue'

const name = ref('Adam')
const attrs = { type: 'text', class: 'form-control', value: 'John' }
const styles = { backgroundColor: 'orange', color: 'white', padding: '10px' }

const changeName = (evt) => {
  if (evt.target.value.trim().length > 5) {
    evt.target.value = evt.target.value.slice(0, 5)
    name.value = evt.target.value
  } else {
    name.value = evt.target.value
  }
}
</script>

<template>
  <h3>A03 Attribute Directive</h3>

  <div class="mb-3">
    <h5>1. 속성 바인딩</h5>
    <input type="text" class="form-control" v-bind:value="name" />
    <input type="text" class="form-control" :value="name" />
    <input type="text" :class="'form-control'" :value="name" />
    <input v-bind="attrs" />

    <div style="background-color: lightgray; color: white; padding: 10px">Hello World</div>
    <div :style="styles">Hello World</div>
  </div>

  <div class="mb-3">
    <h5>2. 양방향 바인딩</h5>
    <input type="text" class="form-control" v-model="name" />
    <input type="text" class="form-control" v-model="name" />
    <input type="text" class="form-control" :value="name" @input="changeName" />
  </div>
</template>
