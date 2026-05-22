<script setup>
import useTodoStore from './../stores/todoStore'

const store = useTodoStore()
const sendData = () => {
  if (store.text.trim() !== '') {
    store.addTodo(store.text)
    store.changeText('')
    document.querySelector('input').focus()
  }
}
</script>

<template>
  <form>
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        :value="store.text"
        @input="(evt) => store.changeText(evt.target.value)"
      />
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendData">SEND</button>
      </div>
    </div>
  </form>
</template>
