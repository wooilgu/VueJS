<script setup>
  
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
      <tr>
        <td></td>
        <td><span></span></td>
        <td><button class="btn btn-primary">Complete</button></td>
        <td><button class="btn btn-danger">Delete</button></td>
      </tr>
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