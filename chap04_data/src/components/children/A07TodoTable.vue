<script setup>
import { inject } from 'vue';
import A07TodoItem from './A07TodoItem.vue';

// const useTodo = inject('useTodo');
// 디스트럭처링 const { todoList } = { todoList: [], text: 'A', update };
const { todoList } = inject('useTodo');
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th style="width: 10%">ID</th>
        <th>Todo</th>
        <th style="width: 10%">Complete</th>
        <th style="width: 10%">Delete</th>
      </tr>
    </thead>
    <tbody>
      <!-- <template v-for="todo in useTodo.todoList.value" :key="todo.id"> -->
      <template v-for="todo in todoList" :key="todo.id">
        <A07TodoItem :todo="todo" />
      </template>
    </tbody>
  </table>
</template>

<!--
<script>
import A06TodoListItem from './A06TodoListItem.vue'

export default {
  components: { A06TodoListItem },
  inject: ['todoList'],
}
</script>

<template>
  <table class="table mb-5">
    <thead>
      <tr>
        <th style="width: 10%">ID</th>
        <th>Todo</th>
        <th style="width: 10%">Complete</th>
        <th style="width: 10%">Delete</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="todo in todoList" :key="todo.id">
        <A06TodoListItem :todo="todo"></A06TodoListItem>
      </template>
    </tbody>
  </table>
</template>
-->
