<script setup>
import A01Component from './components/A01Component.vue';
import A02Props from './components/A02Props.vue';
import A03Emits from './components/A03Emits.vue';
import A04ContactList from './components/A04ContactList.vue';
import A05TodoList from './components/A05TodoList.vue';
import A06Provide from './components/A06Provide.vue';
import A07TodoList from './components/A07TodoList.vue';
import A08Slot from './components/A08Slot.vue';
import A09SoltName from './components/A09SlotName.vue';
import A10ScopeSlot from './components/A10ScopeSlot.vue';
</script>

<template>
  <div class="m-3">
    <h1>Chap04 Data</h1>

    <div>
      <A10ScopeSlot></A10ScopeSlot>
      <A09SoltName></A09SoltName>
      <A08Slot></A08Slot>
      <A07TodoList></A07TodoList>
      <A06Provide></A06Provide>
      <A05TodoList></A05TodoList>
      <A04ContactList></A04ContactList>
      <A03Emits></A03Emits>
      <A02Props></A02Props>
      <A01Component></A01Component>
    </div>
  </div>
</template>

<style scoped></style>
