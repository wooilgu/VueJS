<script setup>
import { ref } from 'vue';
import A08SlotChild from './children/A08SlotChild.vue'

const name = ref('Adam');
const changeName = (str) => name.value = str;
</script>

<template>
  <h3>A08 Slot</h3>

  <div class="mb-5">
    <A08SlotChild></A08SlotChild>
    <A08SlotChild></A08SlotChild>
    <A08SlotChild></A08SlotChild>
  </div>
</template>

<!-- 
<script>
import A07SlotChild from './children/A07SlotChild.vue'

export default {
  components: { A07SlotChild },
  data() {
    return {
      name: 'Adam',
    }
  },
}
</script>

<template>
  <h3>A07 Slot</h3>

  <div class="mb-5">
    <A07SlotChild>
      <div>Good Morning!!! / {{ name }}</div>
    </A07SlotChild>

    <A07SlotChild>
      <div>Good Afternoon!!! / {{ name }}</div>
    </A07SlotChild>

    <A07SlotChild></A07SlotChild>
  </div>
</template>
-->