
<script setup>
import A01DynamicComp from './components/A01DynamicComp.vue';
import A02Teleport from './components/A02Teleport.vue';
import A03Suspense from './components/A03Suspense.vue';
import A04ErrorCaptured from './components/A04ErrorCaptured.vue';

</script>

<template>
  <div class="m-3">
    <h1>Chap05 Component</h1>
    <A04ErrorCaptured></A04ErrorCaptured>
    <A03Suspense></A03Suspense>
    
    <A02Teleport></A02Teleport>
    <A01DynamicComp></A01DynamicComp>

  </div>
</template>

<style scoped></style>

