
<template>
  <tr>
    <td>{{ todo.id }}</td>
    <td>
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </td>
    <td><button class="btn btn-primary">Complete</button></td>
    <td><button class="btn btn-danger">Delete</button></td>
  </tr>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
