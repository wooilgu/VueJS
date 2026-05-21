<script setup></script>

<template>
  <!-- 
   정의되지 않은 isError라는 기본형 변수 참조
   경고 처리는 main.js에서만 처리가능
  -->
  <div v-if="isError">
    <h5>Child Component</h5>
  </div>
</template>

<!--
<script>
export default { }
</script>

<template>
  <div v-if="isError">
    <h5>Child Component</h5>
  </div>  
</template>
-->
