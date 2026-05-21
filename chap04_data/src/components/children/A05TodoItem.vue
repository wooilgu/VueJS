<script setup>
import { useCssModule } from 'vue';

defineProps(['todo', 'updateTodo', 'deleteTodo']);
const style = useCssModule();
</script>

<template>
  <tr>
    <td>{{ todo.id }}</td>
    <td>
      <span :class="{ [style.done]: todo.done }">{{ todo.text }}</span>
    </td>
    <td><button class="btn btn-primary" @click="() => updateTodo(todo.id)">Complete</button></td>
    <td><button class="btn btn-danger" @click="() => deleteTodo(todo.id)">Delete</button></td>
  </tr>
</template>

<style module>
.done {
  text-decoration: line-through;
}
</style>
