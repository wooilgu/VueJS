<script setup>
import A10ScopeSlotChild from './children/A10ScopeSlotChild.vue'
</script>

<template>
  <h3>A10 Scoped Slot</h3>

  <div class="mb-5">
    <A10ScopeSlotChild></A10ScopeSlotChild>
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
