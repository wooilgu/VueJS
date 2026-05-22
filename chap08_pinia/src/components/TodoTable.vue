<script setup>
import TodoItem from './TodoItem.vue';
</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th :style="{width:'10%'}">ID</th>
          <th>Todo</th>
          <th :style="{width:'10%'}">Complete</th>
          <th :style="{width:'10%'}">Delete</th>
        </tr>
      </thead>
      <tbody>
        <template>
          <TodoItem />
        </template>
      </tbody>
    </table>
  </div>
</template>

