<script setup>
import { reactive, ref } from 'vue';

const name = ref('Adam');
const changeName = (evt) => {
  if (evt.target.value.trim() !== '') name.value = evt.target.value;
};

const attrs = { type: 'text', class: 'form-control', value: 'EVE' };
const myStyle = { backgroundColor: 'gray', padding: '10px', color: 'white' };
const style = reactive({ backgroundColor: 'lightgreen', padding: '10px', color: 'white' });
const enterEvent = () => {
  style.backgroundColor = 'orange';
  style.color = 'gray';
};
const leaveEvent = () => {
  style.backgroundColor = 'lightgreen';
  style.color = 'white';
};

const size = ref(200);
const direction = ref('width');
</script>

<template>
  <h3>A03 Attribute Directive</h3>

  <div class="mb-3">
    <h5>1. 속성 바인딩</h5>
    <input type="text" class="form-control" value="{{ name }}" />
    <input type="text" class="form-control" v-bind:value="name" />
    <!-- v-bind는 생략 가능 -->
    <input type="text" class="form-control" :value="name" />
    <input type="text" v-bind:class="'form-control'" :value="name" />
    <input type="text" v-bind="attrs" />

    <div style="background-color: lightgray; padding: 10px; color: white">Hello World</div>
    <div v-bind:style="{ backgroundColor: 'orange', padding: '10px', color: 'white' }">
      Hello World
    </div>
    <div v-bind:style="myStyle">Hello World</div>
    <div v-bind:style="style" @mouseenter="enterEvent" @mouseleave="leaveEvent">Hello World</div>
  </div>

  <div class="mb-3">
    <h5>2. 양방향 바인딩</h5>
    <input type="text" class="form-control" v-model="name" />
    <input type="text" class="form-control" v-model="name" />
    <!-- React 방식 -->
    <input type="text" class="form-control" v-bind:value="name" @input="changeName($event)" />
  </div>

  <div class="row mb-3">
    <div class="col-6">
      <select class="form-control" v-model="direction">
        <option value="width">Width</option>
        <option value="height">Height</option>
      </select>
    </div>
    <div class="col-6">
      <input type="number" class="form-control" v-model.number="size" />
    </div>
  </div>

  <div class="mb-5">
    <img src="/images/home.jpg" alt="man" v-bind:[direction]="size" />
  </div>
</template>

<!--
<script>
export default {
  data() {
    return {
      name: 'Adam',
      ctrl: 'form-control',
      attrs: { type: 'text', class: 'form-control', value: '방자' },
      styles: { backgroundColor: 'lightgray', color: 'white', padding: '10px' },
      size: 300,
      direction: 'width',
    };
  },
  methods: {
    enterEvent() {
      this.styles.backgroundColor = 'orange';
    },
    leaveEvent() {
      this.styles.backgroundColor = 'lightgray';
    },
    changeName(evt) {
      // Guard - 제약조건
      if (evt.target.value.trim().length > 5) {
        this.name = evt.target.value;
      }
    },
  },
};
</script>

<template>
  <h3>A03 Attribute Directive</h3>

  <div>
    <h5>1. 속성 바인딩</h5>
    // 속성은 반드시 v-bind:속성명="변수명 or 값" 형태로 참조. v-bind는 생략 가능 
    <input type="text" class="form-control" value="{{ name }}" />
    <input type="text" class="form-control" v-bind:value="name" />
    <input type="text" class="form-control" :value="name" />
    <input type="text" :class="'form-control'" :value="name" />
    <input type="text" :class="ctrl" :value="name" />
    <input v-bind="attrs" />

    <div style="background-color: lightgray; color: white; padding: 10px">Hello World</div>
    <br />

    <div v-bind:style="styles" @mouseenter="enterEvent" @mouseleave="leaveEvent">Hello World</div>
  </div>
  <br />

  <div>
    <h5>2. 양방향 바인딩</h5>
    <input type="text" class="form-control" v-model.trim="name" />
    <input type="text" class="form-control" v-model.lazy="name" />
    <input type="text" class="form-control" :value="name" @input="changeName" />
  </div>
  <br />

  <div class="row">
    <div class="col-6">
      <select class="form-control" v-model="direction">
        <option value="width">width</option>
        <option value="height">height</option>
      </select>
    </div>
    <div class="col-6">
      <input type="number" class="form-control" v-model.number="size" />
    </div>
  </div>
  <br />

  <div class="mb-5">
    <img src="/images/tree.jpg" alt="Tree" v-bind:[direction]="size" />
  </div>
</template>
-->
