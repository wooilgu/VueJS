<script setup>
import { onMounted } from 'vue'

const isError = true
onMounted(() => {
  throw new Error('Child에서 발생한 예외...')
})
</script>

<template>
  <div v-if="isError">
    <h5>Child Component</h5>
  </div>
</template>

<!--
<script>
export default {
  data() {
    return {
      isError: true,
    }
  },
  mounted() {
    throw new Error('Child에서 발생한 예외...')
  },
}
</script>

<template>
  <div v-if="isError">
    <h5>Child Component</h5>
  </div>
  <div v-else>
    <h5>점검중...</h5>
  </div>
</template>
-->
