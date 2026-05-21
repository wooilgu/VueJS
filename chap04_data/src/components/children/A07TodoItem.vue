<script setup>
import { inject, useCssModule } from 'vue';

// 부모에서 속성으로 전달된 값
defineProps(['todo']);

// provide 값에서 사용할 값만 추출
const { updateTodo, deleteTodo } = inject('useTodo');
const style = useCssModule();
</script>

<template>
  <tr>
    <td>{{ todo.id }}</td>
    <td>
      <span :class="{ [style.done]: todo.done }">{{ todo.text }}</span>
    </td>
    <td>
      <button class="btn btn-primary" @click="() => updateTodo(todo.id)">Complete</button>
    </td>
    <td><button class="btn btn-danger" @click="() => deleteTodo(todo.id)">Delete</button></td>
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
  props: ['todo'],
  inject: ['updateTodo', 'deleteTodo'],
}
</script>

<template>
  <tr>
    <td>{{ todo.id }}</td>
    <td>
      <span :class="{ [$style.A07_done]: todo.done }">{{ todo.text }}</span>
    </td>
    <td>
      <button class="btn btn-primary" @click="() => updateTodo(todo.id)">Complete</button>
    </td>
    <td><button class="btn btn-danger" @click="() => deleteTodo(todo.id)">Delete</button></td>
  </tr>
</template>

<style module>
.A07_done {
  text-decoration: line-through;
}
</style>
-->
