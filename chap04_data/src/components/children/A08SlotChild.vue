<script setup></script>

<template>
  <h5>A09 Slot Child Component</h5>

  <div class="mb-3">
    <slot>
      기본 View를 정의할 수 있음<br />
      표시할 View가 전달되지 않으면 이 내용이 기본으로 표시된다
    </slot>
  </div>
</template>

<!--
<script>
export default {
  data() {
    return {}
  },
}
</script>

<template>
  <h5>A07 Slot Child Component</h5>

  <div class="mb-5">
    <slot>넘어오는 View가 없는 경우 이 텍스트가 기본으로 표시</slot>
  </div>
</template>
-->
