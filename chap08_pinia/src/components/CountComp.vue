<script setup>
import useCountStore from './../stores/countStore'

const countStore = useCountStore()
// console.log(countStore);

// Getter 참조
const one = countStore.firstItem()
const two = countStore.getItem(1002)
</script>

<template>
  <div>
    <h3>{{ countStore.storeName }}</h3>

    <div class="mb-3">
      Num: {{ countStore.count }} <br />
      <button @click="() => countStore.incAction(2)">+</button>
      <button @click="countStore.decAction">-</button>
    </div>

    <div class="mb-5">
      ONE: {{ one.no }} / {{ one.name }}<br />
      TWO: {{ two.no }} / {{ two.name }}<br />
    </div>
  </div>
</template>
