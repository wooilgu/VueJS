<script setup>

</script>

<template>
  <tr>
    <td></td>
    <td>
      <span></span>
    </td>
    <td>
      <button class="btn btn-primary">Complete</button>
    </td>
    <td><button class="btn btn-danger">Delete</button></td>
  </tr>
</template>

<style module>
.done {
  text-decoration: line-through;
}
</style>

<!--
<script>
export default {
  props: ['todo', 'updateTodo', 'deleteTodo'],
}
</script>

<template>
  <tr>
    <td>{{ todo.id }}</td>
    <td>
      <span :class="{ [$style.A05_done]: todo.done }">{{ todo.text }}</span>
    </td>
    <td>
      <button class="btn btn-primary" @click="() => updateTodo(todo.id)">Complete</button>
    </td>
    <td><button class="btn btn-danger" @click="() => deleteTodo(todo.id)">Delete</button></td>
  </tr>
</template>

<style module>
.A05_done {
  text-decoration: line-through;
}
</style>
-->