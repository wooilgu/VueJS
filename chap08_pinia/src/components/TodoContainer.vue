<script setup>
import TodoForm from './TodoForm.vue'
import TodoTable from './TodoTable.vue'

import useCountStore from './../stores/countStore'
const countStore = useCountStore()
</script>

<template>
  <div>
    <h3>Todo List / {{ countStore.count }}</h3>

    <TodoForm></TodoForm>
    <TodoTable></TodoTable>
  </div>
</template>
