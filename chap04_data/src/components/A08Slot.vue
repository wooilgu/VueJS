<script setup>
import { ref } from 'vue';
import A08SlotChild from './children/A08SlotChild.vue';

const name = ref('Adam');
const changeName = (str) => (name.value = str);
</script>

<template>
  <h3>A08 Slot</h3>

  <div class="mb-5">
    <A08SlotChild>
      <div>
        <h3>전달할 View 01 / {{ name }}</h3>
        <div>
          전달되는 내용<br />
          <button @click="() => changeName('ONE')">Name</button>
        </div>
      </div>
    </A08SlotChild>
    <A08SlotChild>
      <h3>전달할 View 02 / {{ name }}</h3>
      <div>
        자식 컴포넌트의 slot이라는 태그 위치에 표시된다<br />
        <button @click="() => changeName('TWO')">Name</button>
      </div>
    </A08SlotChild>
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
