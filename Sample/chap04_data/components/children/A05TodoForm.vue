<script setup>

</script>

<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control"/>
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1">Submit</button>
      </div>
    </div>  
  </form>
</template>

<!--
<script>
export default {
  props: ['addTodo'],
  data() {
    return {
      txt: '',
    }
  },
  methods: {
    sendData() {
      if (this.txt !== '') {
        this.addTodo(this.txt)
        this.txt = ''
        document.querySelector('input').focus()
      }
    },
  },
}
</script>

<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" v-model.trim="txt" />
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendData">Submit</button>
      </div>
    </div>
  </form>
</template>
-->
