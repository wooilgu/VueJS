<script setup>
import A05TodoItem from './A05TodoItem.vue';

defineProps(['todoList', 'updateTodo', 'deleteTodo']);
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
      <template v-for="todo in todoList" :key="todo.id">
        <!-- tr 하나 생성마다 사용할 값(todo)를 전달 -->
        <A05TodoItem :todo="todo" :updateTodo="updateTodo" :deleteTodo="deleteTodo"></A05TodoItem>
      </template>
    </tbody>
  </table>
</template>

<!--
<script>
import A05TodoListItem from './A05TodoListItem.vue'

export default {
  components: { A05TodoListItem },
  props: ['todoList', 'updateTodo', 'deleteTodo'],
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
        <A05TodoListItem :todo="todo" :updateTodo="updateTodo" :deleteTodo="deleteTodo"></A05TodoListItem>
      </template>
    </tbody>
  </table>
</template>
-->
