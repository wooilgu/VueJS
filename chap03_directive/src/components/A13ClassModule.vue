<script setup>
import { ref, useCssModule } from 'vue';

const hello = 'Good Evening!!!';
const isChecked = ref(true);

// module로 정의해서 변경된 CSS 클래스 이름을 참조
const style = useCssModule();
// console.log(style);

const classAll = `${style.one} ${style.two} ${style.three}`;
</script>

<template>
  <h3>A13 Class Module</h3>

  <div class="mb-3">
    <div :class="style.one">{{ hello }}</div>
    <div :class="[style.one, style.two, style.three]">{{ hello }}</div>
    <div :class="classAll">{{ hello }}</div>
  </div>

  <div class="mb-5">
    <div :class="{ [style.one]: true, [style.two]: true, [style.three]: isChecked }">
      {{ hello }}
    </div>
    <div :class="{ [classAll]: isChecked }">{{ hello }}</div>
    <div>
      <input type="checkbox" class="form-check-input" id="isChecked" v-model="isChecked" />{{ ' ' }}
      <label class="form-check-label" for="isChecked">CHECK</label>
    </div>
  </div>
</template>

<style module>
.one {
  color: orange;
}
.two {
  font-size: 24pt;
}
.three {
  font-weight: bold;
}
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
