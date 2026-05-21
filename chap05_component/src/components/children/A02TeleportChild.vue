<script setup>
// npm i portal-vue
// main.js에 등록부터 해야한다
import { Portal } from 'portal-vue'
import { reactive } from 'vue'

const modals = reactive({
  one: false,
  two: false,
})

const toggleModal = (name, check) => (modals[name] = check)
</script>

<template>
  <div>
    <button @click="toggleModal('one', true)">ONE SHOW</button>
    <button @click="toggleModal('two', true)">TWO SHOW</button>
  </div>
  <!-- 
    1. 이동할 곳을 index.html에 지정한다 => id: popup 
    2. 이동할 컴포넌트를 <Teleport>로 감싸고 to 옵션으로 #popup 지정
  -->
  <Teleport to="#popup">
    <div class="dialog" v-show="modals.one">
      <h5>Home Component</h5>
      <p>
        Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces.
        It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and
        component-based programming model that helps you efficiently develop user interfaces, be it
        simple or complex.<br />
      </p>
      <button @click="toggleModal('one', false)">HIDE</button>
    </div>
  </Teleport>

  <!-- 
    1.main.js에 등록부터 해야 한다.
    2.A01DynamicComp의 맨 위 위치로 이동
  
  -->
  <Portal to="dist">
    <div class="dialog" v-show="modals.two">
      <h5>News Component</h5>
      <p>
        With Options API, we define a component's logic using an object of options such as data,
        methods, and mounted. Properties defined by options are exposed on this inside functions,
        which points to the component instance
      </p>
      <button @click="toggleModal('two', false)">HIDE</button>
    </div>
  </Portal>
</template>

<style scoped>
.dialog {
  position: fixed;
  top: 50px;
  left: 30%;
  width: 600px;
  height: 200px;
  z-index: 99999;
  border: 1px solid gray;
  background-color: white;
  padding: 10px;
}
</style>

<!--
<script>
// npm i portal-vue
// main.js에 등록부터 해야한다
export default {
  data() {
    return {
      one: false,
      two: false,
    };
  },
  methods: {
    showModal(name, check) {
      this[name] = check;
    },
  },
};
</script>

<template>
  <form>
    <button @click.prevent="() => showModal('one', true)">ONE SHOW</button>
    <button @click.prevent="() => showModal('two', true)">TWO SHOW</button>
  </form>

  <Teleport to="#popup">
    <div class="dialog" v-show="one">
      <h5>Home Component</h5>
      <p>
        Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based
        programming model that helps you efficiently develop user interfaces, be it simple or complex.<br />
      </p>
      <button @click="() => showModal('one', false)">HIDE</button>
    </div>
  </Teleport>

  <portal to="dist">
    <div class="dialog" v-show="two">
      <h5>News Component</h5>
      <p>
        With Options API, we define a component's logic using an object of options such as data, methods, and mounted. Properties defined by options are exposed on this inside functions, which points
        to the component instance
      </p>
      <button @click="() => showModal('two', false)">HIDE</button>
    </div>
  </portal>
</template>
-->
