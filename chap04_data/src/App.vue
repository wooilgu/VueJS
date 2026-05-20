<script setup>

import A01Component from './components/A01Component.vue'
import A02Props from './components/A02Props.vue'
import A03Emits from './components/A03Emits.vue'
import A04ContactList from './components/A04ContactList.vue'
import A05TodoList from './components/A05TodoList.vue'



</script>

<template>
  <div class ="m-3">
    <h1>chap04 Data</h1>

    <div>
      <A05TodoList></A05TodoList>
      <A04ContactList></A04ContactList>
      <A03Emits></A03Emits>
      <A02Props></A02Props>
      <A01Component></A01Component>

    </div>
  </div>
</template>

<style scoped></style>
