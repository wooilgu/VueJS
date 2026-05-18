<script setup>
import { computed } from 'vue';

const dateOrTime = computed(() => {
  const today = new Date();
  switch(props.now) {
    case 'date':
      return today.toLocaleDateString();
    case 'time':
      return today.toLocaleTimeString();
    default:
      return today.toLocaleString();
  }
})
</script>

<template>
  <div>
    <h5>A02 Props Two Component</h5>

    <div class="mb-5">
      Now: <br />
      Name: <br />
      Age:  <br />
      Address:  <br />
      Array:  <br />
      User: <br />
      onAdd:  <br />
      isChecked:  <br />
    </div>

    <div class="mb-3">
      <button class="btn btn-danger">ADDRESS</button>
    </div>
  </div>
</template>

<!-- 
<script>
export default {
  props: ['type', 'name', 'age', 'add', 'arr', 'user', 'onAdd', 'changeAddress'],
  data() {
    return {}
  },
}
</script>

<template>
  <h5>A02 Props Child TWO</h5>

  <div class="mb-5">
    Today: {{ this.type }}<br />
    Name: {{ name }}<br />
    Age: {{ age + 1 }}<br />
    Address: {{ add }}<br />
    Array: {{ arr[0] }} / {{ arr[1] }} / {{ arr[2] }}<br />
    User: {{ user.name }} / {{ user.age }} / {{ user.address }}<br />
    Function: {{ onAdd(10, 20) }}<br />
    <button @click="() => changeAddress('인천')">Address</button>
  </div>
</template>

-->
