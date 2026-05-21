<script setup>
import { inject } from 'vue';

const { text, addTodo, changeText } = inject('useTodo');

const sendData = () => {
  if (text.value.trim() !== '') {
    addTodo(text.value);
    changeText('');
    document.querySelector('input').focus();
  }
};
</script>

<template>
  <form>
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        :value="text"
        @input="(evt) => changeText(evt.target.value)"
      />
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendData">Submit</button>
      </div>
    </div>
  </form>
</template>

<!-- 
<script>
export default {
  inject: ['addTodo'],
  methods: {
    sendData() {
      // const elem = document.querySelector('input')
      const elem = this.$refs.todoRef
      if (elem.value.trim() !== '') {
        this.addTodo(elem.value)
        elem.value = ''
        elem.focus()
      }
    },
  },
}
</script>

<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" ref="todoRef" />
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendData">Submit</button>
      </div>
    </div>
  </form>
</template>
-->
