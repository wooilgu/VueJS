<script setup>
import { ref } from 'vue';
import A05TodoForm from './children/A05TodoForm.vue';
import A05TodoTable from './children/A05TodoTable.vue';

const todoList = ref([
  { id: 1, text: '첫 번째 할 일', done: true },
  { id: 2, text: '두 번째 할 일', done: false },
  { id: 3, text: '세 번째 할 일', done: false },
]);
</script>

<template>
  <h3>A05 TodoList</h3>

  <div class="mb-5">
    <A05TodoForm></A05TodoForm>
    <A05TodoTable></A05TodoTable>
  </div>
</template>

<!-- 
<script>
import A05TodoForm from './children/A05TodoForm.vue'
import A05TodoTable from './children/A05TodoTable.vue'

const todoList = [
  { id: 1, text: '첫 번째 할 일', done: true },
  { id: 2, text: '두 번째 할 일', done: false },
  { id: 3, text: '세 번째 할 일', done: false },
]

export default {
  components: { A05TodoForm, A05TodoTable },
  data() {
    return {
      todoList,
      id: 4,
    }
  },
  methods: {
    addTodo(text) {
      // const todo = { id: this.id++, text, done: false }
      const cnt = this.todoList.at(-1) ? this.todoList.at(-1).id + 1 : 1
      const todo = { id: cnt, text, done: false }
      this.todoList.push(todo)
    },
    updateTodo(id) {
      // ES2015
      // findIndex는 값 비교로 매치되는 요소가 배치된 실질적인 index를 반환
      // find는 값 비교로 매치되는 요소가 배치된 실질적인 객체를 반환
      const idx = this.todoList.findIndex((item) => item.id === id)
      this.todoList[idx].done = !this.todoList[idx].done
    },
    deleteTodo(id) {
      const idx = this.todoList.findIndex((item) => item.id === id)
      this.todoList.splice(idx, 1)
    },
  },
}
</script>

<template>
  <h3>A05 TodoList</h3>

  <div class="mb-5">
    <A05TodoForm :addTodo="addTodo"></A05TodoForm>
    <A05TodoTable :todoList="todoList" :updateTodo="updateTodo" :deleteTodo="deleteTodo"></A05TodoTable>
  </div>
</template>
-->
