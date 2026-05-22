
import { defineStore } from "pinia";
import { ref } from "vue";

const todoStore = defineStore('todoStore', () => {
  const text = ref('');
  const todoList = ref([
    { id: 1, text: '첫번째 할 일', done: false },
    { id: 2, text: '두번째 할 일', done: true },
  ])

  // Action
  const changeText = (str) => text.value = str;
  const addTodo = (text) => {
    const cnt = todoList.value.at(-1) ? todoList.value.at(-1).id + 1 : 1;
    const todo = { id: cnt, text, done: false };
    todoList.value.push(todo);
  }
  const updateTodo = (id) => {
    const todo = todoList.value.find((todo) => todo.id === id);
    todo.done = !todo.done;
  }
  const deleteTodo = (id) => {
    const idx = todoList.value.findIndex((todo) => todo.id === id);
    todoList.value.splice(idx, 1);
  }

  return { text, todoList, changeText, addTodo, updateTodo, deleteTodo };
});
export default todoStore;

