<script setup>
import { onErrorCaptured, ref } from 'vue'
import A04ErrorChild from './children/A04ErrorChild.vue'
import ErrorComp from './children/ErrorComp.vue'

const hasError = ref(true)

// 에러 상태 관리
// 자신의 컴포넌트 에러는 캐치 못함. 자식 컴포넌트의 에러만 잡아 처리한다
onErrorCaptured((err, vm, info) => {
  console.error('----- A04Component -----')
  console.error(err) // Error 객체
  console.error(vm) // 에러가 발생한 컴포넌트
  console.error(info) // Vue가 제공하는 안내

  hasError.value = false // 대체 컴포넌트를 표시 할 목적

  // return true;           // 상위 컴포넌트로 에러 전파 (default)
  return false
})
</script>

<template>
  <div v-if="hasError">
    <h3>A04 ErrorCaptured</h3>

    <hr />

    <A04ErrorChild></A04ErrorChild>
  </div>
  <div v-else>
    <ErrorComp></ErrorComp>
  </div>
</template>

<!--
<script>
import A04ErrorChild from './children/A04ErrorChild.vue'

export default {
  components: { A04ErrorChild },
  // 자신의 컴포넌트 에러는 체크하지 못함.
  // 자식 컴포넌트의 에러만 체크해서 처리 할 목적으로 기술
  errorCaptured(err, vm, info) {
    console.log('----- A06ErrorCaputured -----')
    // console.log(err);
    // console.log(vm);
    // console.log(info);

    vm.isError = false;

    // 상위 컴포넌트로 에러 이벤트가 전파된다
    // A06Child(에러 발생) => A06ErrorCap..(에러 처리) => App => main
    // return false;      // 에러 전파 방지
  }
}
</script>

<template>
  <h3>A04 Error</h3>

  <hr>

  <div class="mb-5">
    <A04ErrorChild></A04ErrorChild>
  </div>
</template>
-->
