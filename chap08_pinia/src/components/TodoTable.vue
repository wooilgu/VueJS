<script setup>
import TodoItem from './TodoItem.vue'
import useTodoStore from './../stores/todoStore'

const store = useTodoStore()
</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th :style="{ width: '10%' }">ID</th>
          <th>Todo</th>
          <th :style="{ width: '10%' }">Complete</th>
          <th :style="{ width: '10%' }">Delete</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="todo in store.todoList" :key="todo.id">
          <TodoItem :todo="todo" />
        </template>
      </tbody>
    </table>
  </div>
</template>
