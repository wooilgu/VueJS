<script setup>
import A04ErrorChild from './children/A04ErrorChild.vue'
import ErrorComp from './children/ErrorComp.vue'

// 에러 상태 관리
const hasError = ref(false);

</script>

<template>
  <h3>A04 ErrorCaptured</h3>
    
  <hr>

  <A04ErrorChild></A04ErrorChild>
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