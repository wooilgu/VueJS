<script setup>
import A10ScopeSlotChild from './children/A10ScopeSlotChild.vue';
</script>

<template>
  <h3>A10 Scoped Slot</h3>

  <div class="mb-5">
    <A10ScopeSlotChild>
      <!-- one은 slot이 전달한 값을 관리하는 객체 -->
      <template v-slot:default="one">
        <h3>SLOT</h3>
        User: {{ one.user.name }} / {{ one.user.age }}<br />
        Kor: {{ one.kor }} <br />
        Eng: {{ one.eng }} <br />
        <button @click="() => one.changeKor(3000)">KOR</button>
      </template>
      <!-- <br> => 에러. 중간에 태그가 올 수 없음 -->
      <template #jumsu="one">
        <h3>SLOT</h3>
        User: {{ one.user.name }} / {{ one.user.age }}<br />
        Kor: {{ one.kor }} <br />
        Eng: {{ one.eng }} <br />
        <button @click="() => one.changeKor(3000)">KOR</button>
      </template>
    </A10ScopeSlotChild>
  </div>
</template>

<!-- 
<script>
import A09ScopeSlotChild from './children/A09ScopeSlotChild.vue'

export default {
  components: { A09ScopeSlotChild },
}
</script>

<template>
  <h3>A09 Scoped Slot</h3>

  <div class="mb-5">
    <A09ScopeSlotChild>
      <template v-slot="one">
        Nickname: {{ one.nickname }}<br />
        Kor: {{ one.kor }}<br />
        Eng: {{ one.eng }}<br />
        User: {{ one.user.name }} / {{ one.user.age }}<br />
        <button @click="() => one.changeKor(3000)">KOR</button>
        <br />
        <br />
      </template>

      <template #jumsu="one">
        Nickname: {{ one.nickname }}<br />
        Kor: {{ one.kor }}<br />
        Eng: {{ one.eng }}<br />
        User: {{ one.user.name }} / {{ one.user.age }}<br />
        <button @click="() => one.changeKor(3000)">KOR</button>
      </template>
    </A09ScopeSlotChild>
  </div>
</template>
-->
