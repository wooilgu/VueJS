<script setup>
import A05WarnChild from './children/A05WarnChild.vue'
</script>

<template>
  <h3>A05 WarnHandler</h3>

  <A05WarnChild></A05WarnChild>
</template>

<!--
<script>
import A05WarnChild from './children/A05WarnChild.vue'

export default {
  // 경고 관련은 모두 main에서만 잡는다.
  // 빌드하면 빌드한 결과에서는 표시되지 않는다
  components: { A05WarnChild },
  data() {
    return {
      isChecked: false
    }
  },
}
</script>

<template>
  <h3>A05 Warn</h3>

  <div class="mb-5">
    <A05WarnChild></A05WarnChild>
  </div>
</template>
-->
