<script setup>
import { onErrorCaptured } from 'vue'
import A01DynamicComp from './components/A01DynamicComp.vue'
import A02Teleport from './components/A02Teleport.vue'
import A03Suspense from './components/A03Suspense.vue'
import A04ErrorCaptured from './components/A04ErrorCaptured.vue'
import A05WarnHandler from './components/A05WarnHandler.vue'

// 하위 컨테이너에서 발생한 에러를 처리 할 목적
// App 컴포넌트의 에러는 main.js에서 처리
onErrorCaptured((err, vm, info) => {
  console.error('----- App -----')
  console.error(err) // Error 객체
  console.error(vm) // 에러가 발생한 컴포넌트
  console.error(info) // Vue가 제공하는 안내

  return true // 상위 컴포넌트로 에러 전파 (default)
  // return false;
})
</script>

<template>
  <div class="m-3">
    <h1>Chap05 Component</h1>
    <A05WarnHandler></A05WarnHandler>
    <A04ErrorCaptured></A04ErrorCaptured>
    <A03Suspense></A03Suspense>
    <A02Teleport></A02Teleport>
    <A01DynamicComp></A01DynamicComp>
  </div>
</template>

<style scoped></style>
