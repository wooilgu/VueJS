<script setup>
import { computed, provide, reactive, ref } from 'vue';
import A06Inject from './children/A06Inject.vue';

const name = ref('NolBu');
const age = ref(20);
const user = reactive({ name: '흥부', age: 20 });

const changeName = () => (name.value = '놀부');
const changeAge = () => (age.value = 3000);
const changeUser = () => {
  user.name = '놀부';
  user.age = 300;
};

// 자식 요소 deep 상관없이 어디서든지 공유할 수 있도록 정의
// ref 변수는 computed로 감싼다 => 상태변수로 변경되서 전달됨
provide('useData', {
  name: computed(() => name.value),
  age: computed(() => age.value),
  user: computed(() => user),
  changeName,
  // method => 변경되지 않음, 참조하기 쉽게 객체로 묶어 사용도 가능하다.
  action: { changeAge, changeUser },
});
</script>

<template>
  <h3>A06 Provide</h3>

  <div class="mb-3">
    계층과는 상관없이 App 전체에서 공유 할 정보가 있다면 Vuex/Pinia<br />
    계층 Tree 내부에서만 이용한다면 Provide / Inject<br />
  </div>

  <div class="mb-3">
    Name: {{ name }}<br />
    Age: {{ age }}<br />
    User: {{ user.name }} / {{ user.age }}<br />
  </div>

  <div class="mb-3">
    <button @click="changeName">Name</button>
    <button @click="changeAge">Age</button>
    <button @click="changeUser">User</button><br />
  </div>

  <A06Inject></A06Inject>
</template>

<!-- 
<script>
import { computed } from 'vue'
import A06Inject from './children/A06Inject.vue'

export default {
  components: { A06Inject },
  data() {
    return {
      name: 'NolBu',
      user: { name: '흥부', age: 20 },
    }
  },
  methods: {
    changeName() {
      this.name = 'HungBu'
    },
    changeUser() {
      this.user.name = 'BangJa'
      this.user.age = 100
    },
  },
  // Vue 3.X
  provide() {
    return {
      type: 'date',
      name: computed(() => this.name),
      user: computed(() => this.user),
      changeName: this.changeName,
      changeUser: this.changeUser,
    }
  },
}
</script>

<template>
  <h3>A06 Provide</h3>

  <div class="mb-3">
    계층과는 상관없이 App 전체에서 공유 할 정보가 있다면 Vuex<br />
    계층 Tree 내부에서만 이용한다면 Provide / Inject<br />
    Component가 특정 계층에서만 사용한다면 Provide / Inject
  </div>

  <div class="mb-3">
    Name: {{ name }}<br />
    User: {{ user.name }} / {{ user.age }}<br />
  </div>

  <div class="mb-3">
    <button @click="changeName">Name</button>
    <button @click="changeUser">User</button><br />
  </div>

  <hr />

  <div class="mb-5">
    <A06Inject></A06Inject>
  </div>
</template>
-->
