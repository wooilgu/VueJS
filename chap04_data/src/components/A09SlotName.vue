<script setup>
import A09SlotNameChild from './children/A09SlotNameChild.vue';
</script>

<template>
  <h3>A09 Slot Name</h3>

  <!-- 
    자식 컴포넌트에서 slot에 이름을 할당하고 각 이름별로 View를 전달
    name에 전달되는 View는 template 태그로 묶어서 전달한다
  -->
  <A09SlotNameChild>
    <h3>맨 위에 기술</h3>

    <template v-slot:top>
      <h3>TOP</h3>
      <div>Top에 전달될 View</div>
    </template>

    <div>중간에 추가된 View</div>

    <template v-slot:left>
      <h3>LEFT</h3>
      <div>Left에 전달될 View</div>
    </template>

    <!-- v-slot의 단축 속성 => # -->
    <template #right>
      <h3>RIGHT</h3>
      <div>Right에 전달될 View</div>
    </template>

    <template #bottom>
      <h3>bottom</h3>
      <div>bottom에 전달될 View</div>
    </template>

    <div>하단에 기술된 View</div>
  </A09SlotNameChild>
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
