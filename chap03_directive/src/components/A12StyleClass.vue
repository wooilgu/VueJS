<script setup>
import { computed, ref } from 'vue';

const str = 'Good Morning!!!';
const check = ref(true);
const num = ref(0);

const styleOne = { color: 'orange', fontSize: '24pt', fontWeight: 'bold' };
const styleTwo = ref({ color: 'orange', fontSize: '24pt', fontWeight: 'bold' });

const classOne = 'one two three';
const classTwo = ref('one two three');

const enterEvent = () => {
  styleTwo.value = { ...styleTwo.value, backgroundColor: 'lightgray', color: 'white' };
};
const leaveEvent = () => {
  styleTwo.value = { color: 'orange', fontSize: '24pt', fontWeight: 'bold' };
};
const enterCSSEvent = () => {
  classTwo.value = 'one two';
};
const leaveCSSEvent = () => {
  classTwo.value = 'one two three';
};

const checkNum = computed(() => {
  if (num.value > 100 || num.value < 0) return { warning: true };
  else return { warning: false };
});
</script>

<template>
  <h3>A12 Style & Class</h3>

  <div class="mb-3">
    <h5>Style Binding</h5>
    <div style="color: orange; font-size: 24pt; font-weight: bold">{{ str }}</div>
    <div v-bind:style="{ color: 'orange', fontSize: '24pt', fontWeight: 'bold' }">{{ str }}</div>
    <div v-bind:style="styleOne">{{ str }}</div>
    <div :style="styleTwo" @mouseenter="enterEvent" @mouseleave="leaveEvent">{{ str }}</div>
  </div>

  <div class="mb-3">
    <h5>Class Binding</h5>
    <div class="one two three">{{ str }}</div>
    <div class="one" v-bind:class="'two three'">{{ str }}</div>
    <div v-bind:class="classOne">{{ str }}</div>
    <div :class="classTwo" @mouseenter="enterCSSEvent" @mouseleave="leaveCSSEvent">{{ str }}</div>
    <br />

    <!-- key는 class 이름(문자열)이다 -->
    <div :class="{ one: true, two: true, three: check }">{{ str }}</div>
    <div :class="{ [classOne]: check }">{{ str }}</div>

    <div>
      <input type="checkbox" class="form-check-input" id="check" v-model="check" />{{ ' ' }}
      <label class="form-check-label" for="check">CHECK</label>
    </div>
  </div>

  <div class="mb-5">
    <!-- <input type="number" class="form-control" v-model="num" :class="{ warning:true }" /> -->
    <input type="number" class="form-control" v-model="num" :class="checkNum" />
  </div>
</template>

<!-- 
style => 전역 클래스로 등록. 동일한 이름이 존재하면 덮어씀
style scoped => 현재 컴포넌트만 적용 가능하도록 속성을 추가함(View 요소도 속성이 추가됨) 
style module => 현재 컴포넌트만 적용. class 이름을 변경. 변경된 이름은 this.$style이 관리
-->
<style scoped>
.one {
  color: orange;
}
.two {
  font-size: 24pt;
}
.three {
  font-weight: bold;
}
.warning {
  background-color: orange;
  color: gray;
}
</style>

<!--
<script>
export default {
  data() {
    return {
      msg: 'Good Morning',
      check: true,
      num: 0,
      styleOne: { color: 'orange', fontSize: '20pt', fontWeight: 'bold' },
      classOne: 'one two three',
    };
  },
  computed: {
    styleTwo: () => ({ color: 'orange', fontSize: '20pt', fontWeight: 'bold' }),
    classTwo: () => 'one two three',
    warnCSS() {
      if (this.num < 0 || this.num > 100) return { warning: true };
      else return { warning: false };
    },
  },
  methods: {
    enterEvent() {
      this.styleOne.color = 'green';
    },
    leaveEvent() {
      this.styleOne.color = 'orange';
    },
    enterClzEvent() {
      this.classOne = 'two three';
    },
    leaveClzEvent() {
      this.classOne = 'one two three';
    },
  },
};
</script>

<template>
  <div class="mb-3">
    <h3>A13 Style & Class</h3>

    <div style="color: orange; font-size: 20pt; font-weight: bold">{{ msg }}</div>
    <div v-bind:style="{ color: 'orange', fontSize: '20pt', fontWeight: 'bold' }">{{ msg }}</div>
    <div :style="styleOne" @mouseenter="enterEvent" @mouseleave="leaveEvent">{{ msg }}</div>
    <div :style="styleTwo">{{ msg }}</div>
  </div>

  <div class="mb-3">
    <h3>Class Binding</h3>

    <div class="one two three">{{ msg }}</div>
    <div class="one" v-bind:class="'two three'">{{ msg }}</div>
    <div :class="classOne" @mouseenter="enterClzEvent" @mouseleave="leaveClzEvent">{{ msg }}</div>
    <div :class="classTwo">{{ msg }}</div>
    <br />

    <div :class="{ one: check, two: true, three: true }">{{ msg }}</div>
    <div :class="{ [classTwo]: check }">{{ msg }}</div>

    <div>
      <input type="checkbox" class="form-check-input" id="check" v-model="check" />{{ ' ' }}
      <label class="form-check-label" for="check">CHECK</label>
    </div>
  </div>

  <div class="mb-5">
    <input type="number" class="form-control" v-model.number="num" :class="warnCSS" />
  </div>
</template>

<style scoped>
  .one { color: orange; }
  .two { font-size: 24pt; }
  .three { font-weight: bold; }
  .warning {background-color: orange; color: gray; }
</style>
-->
