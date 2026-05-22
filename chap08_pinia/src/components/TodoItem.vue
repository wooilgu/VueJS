<script setup>
import { useCssModule } from 'vue'
import useTodoStore from './../stores/todoStore'

defineProps(['todo'])
const style = useCssModule()
const store = useTodoStore()
</script>

<template>
  <tr>
    <td>{{ todo.id }}</td>
    <td>
      <span :class="{ [style.done]: todo.done }">{{ todo.text }}</span>
    </td>
    <td>
      <button class="btn btn-primary" @click="() => store.updateTodo(todo.id)">Complete</button>
    </td>
    <td>
      <button class="btn btn-danger" @click="() => store.deleteTodo(todo.id)">Delete</button>
    </td>
  </tr>
</template>

<style module>
.done {
  text-decoration: line-through;
}
</style>
