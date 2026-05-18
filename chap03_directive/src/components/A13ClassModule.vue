<script setup>
import { ref } from 'vue';

const hello = 'Good Evening!!!';
const isChecked = ref(true);
</script>

<template>
  <h3>A13 Class Module</h3>

  <div class="mb-3">
    <div class="one">{{hello}}</div>
    <div class="one">{{hello}}</div>
    <div class="one">{{hello}}</div>
  </div>

  <div class="mb-5">
    <div class="one">{{hello}}</div>
    <div class="one">{{hello}}</div>
    <div>
      <input type="checkbox" class="form-check-input" id="isChecked" v-model="isChecked" />{{ ' ' }}
      <label class="form-check-label" for="isChecked">CHECK</label>
    </div>
  </div>
</template>

<style scoped>
  .one { color: orange; }
  .two { font-size: 24pt; }
  .three { font-weight: bold; }
</style>

<!--
<script>
export default {
  data() {
    return {
      msg: 'Hello World!!',
      isChecked: true,
      num: 0,
    };
  },
  computed: {
    classOne() {
      return `${this.$style.one} ${this.$style.two} ${this.$style.three}`;
    },
  },
  mounted() {
    console.log(this.$style);
  },
};
</script>

<template>
  <h3>Class Module</h3>

  <div class="mb-3">
    <div :class="$style.one">{{ msg }}</div>
    <div :class="`${$style.one} ${$style.two} ${$style.three}`">{{ msg }}</div>
    <div :class="[$style.one, $style.two, $style.three].join(' ')">{{ msg }}</div>
  </div>

  <div class="mb-3">
    <div :class="{ [$style.one]: isChecked, [$style.two]: true, [$style.three]: true }">{{ msg }}</div>
    <div :class="{ [classOne]: isChecked }">{{ msg }}</div>

    <div>
      <input type="checkbox" class="form-check-input" id="check" v-model="isChecked" />{{ ' ' }}
      <label class="form-check-label" for="check">CHECK</label>
    </div>
  </div>

  <div class="mb-5"></div>
</template>

<style scoped>
  .one { color: orange; }
  .two { font-size: 24pt; }
  .three { font-weight: bold; }
</style>
-->