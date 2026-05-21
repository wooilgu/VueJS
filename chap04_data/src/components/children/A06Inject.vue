<script setup>
import { inject } from 'vue';

// inject('provide가 선언한 이름')
const useData = inject('useData');
</script>

<template>
  <h5>A06 Inject</h5>

  <div class="mb-5">
    <div class="mb-5">
      Name: {{ useData.name }}<br />
      Age: {{ useData.age }}<br />
      User: {{ useData.user?.name }} / {{ useData.user?.age }}<br />

      <button @click="useData.changeName">Name</button>
      <button @click="useData.action.changeAge">Age</button>
      <button @click="useData.action.changeUser">User</button><br />
    </div>
  </div>
</template>

<!-- 
<script>
export default {
  inject: ['type', 'name', 'user', 'changeName', 'changeUser'],
  data() {
    return {}
  },
}
</script>

<template>
  <h3>A06 Inject / {{ type }}</h3>

  <div class="mb-5">
    Type: {{ type }}<br />
    Name: {{ name }}<br />
    User: {{ user.name }} / {{ user.age }}<br />

    <button @click="changeName">Name</button>
    <button @click="changeUser">User</button><br />
  </div>
</template>

-->
