<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route)
</script>

<template>
  <div>
    <h1>요청하신 "/{{ route.params.pathMatch.join(' - ') }}" 파일이 존재하지 않습니다.</h1>
  </div>
</template>

<!--
<script>
export default {
  created() {
    // console.log(this.$route)
  }
}
</script>
<template>
  <div>
    <h1>요청하신 {{$route.path}} 파일이 존재하지 않습니다.</h1>
  </div>
</template>
-->
