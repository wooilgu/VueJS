<script setup>
import { computed, provide, ref } from 'vue';
import A07TodoForm from './children/A07TodoForm.vue';
import A07TodoTable from './children/A07TodoTable.vue';

const todoList = ref([
  { id: 1, text: '첫 번째 할 일', done: true },
  { id: 2, text: '두 번째 할 일', done: false },
  { id: 3, text: '세 번째 할 일', done: false },
]);
const text = ref('A');
const changeText = (str) => (text.value = str);

const addTodo = (text) => {
  const cnt = todoList.value.length > 0 ? todoList.value.at(-1).id + 1 : 1;
  const todo = { id: cnt, text, done: false };
  todoList.value.push(todo);
};
const updateTodo = (id) => {
  // find => 매칭되는 값 자체를 가져온다
  const todo = todoList.value.find((todo) => todo.id === id);
  todo.done = !todo.done;
};
const deleteTodo = (id) => {
  const index = todoList.value.findIndex((todo) => todo.id === id);
  todoList.value.splice(index, 1);
};

provide('useTodo', {
  todoList: computed(() => todoList.value),
  text: computed(() => text.value),
  addTodo,
  updateTodo,
  deleteTodo,
  changeText,
});
</script>

<template>
  <h3>A07 TodoList</h3>

  <div class="mb-5">
    <A07TodoForm></A07TodoForm>
    <A07TodoTable></A07TodoTable>
  </div>
</template>

<!-- 
<script>
  import { computed } from 'vue';
  import A08TodoListForm from './children/A08TodoListForm.vue'
  import A08TodoListTable from './children/A08TodoListTable.vue'

  const todoList = [
    { id: 1, text: '첫 번째 할 일', done: true },
    { id: 2, text: '두 번째 할 일', done: false },
    { id: 3, text: '세 번째 할 일', done: false },
  ];

  export default {
    components: { A08TodoListForm, A08TodoListTable},
    data() {
      return {
        todoList,
        id: 4
      }
    },
    methods: {
      updateTodo(id) {
      const todo = this.todoList.find(item => item.id === id);
      todo.done = !todo.done;
      },
      deleteTodo(id) {
        const index = this.todoList.findIndex(item => item.id === id);
        delete this.todoList.splice(index, 1)
      },
      addTodo(text) {
        const todo = {id: this.id++, text, done: false};
        this.todoList.push(todo);
      }
    },
    provide() {
      return {
        todoList: computed(() => this.todoList),
        updateTodo: this.updateTodo,
        deleteTodo: this.deleteTodo,
        addTodo: this.addTodo,
      }
    }
  }
</script>
-->
