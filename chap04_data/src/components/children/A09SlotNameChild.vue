<script setup></script>

<template>
  <h5>A09 Slot Named</h5>

  <div class="row card-body mb-5">
    <div class="col-12 border">
      <slot name="top">Top 기본값</slot>
    </div>
    <div class="col-4 border">
      <slot name="left">Left 기본값</slot>
    </div>
    <div class="col-8 border">
      <slot name="right">Right 기본값</slot>
    </div>
    <div class="col-12 border">
      <slot name="bottom">Bottom 기본값</slot>
    </div>

    <div class="col-12">
      <!-- <slot name="default">Default 기본값</slot> -->
      <slot>Default 기본값</slot>
    </div>
  </div>
</template>

<style scoped>
.border {
  border: 1px solid lightgray;
}
</style>

<!--
<script>
export default {
  data() {
    return {}
  },
}
</script>

<template>
  <h5>A08 Slot Named</h5>

  <div class="row card-body mb-5">
    <div class="col-12 border">
      <slot name="header">Header Default</slot>
    </div>
    <div class="col-4 border">
      <slot name="left">Left Default</slot>
    </div>
    <div class="col-8 border">
      <slot name="right">Right Default</slot>
    </div>
    <div class="col-12 border">
      <slot name="footer">Footer Default</slot>
    </div>

    <div class="col-12">
      <slot>Default</slot>
    </div>
  </div>
</template>

<style scoped>
.border {
  border: 1px solid lightgray;
}
</style>
-->
