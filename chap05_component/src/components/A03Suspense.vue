<script setup>
// npm i vue3-spinners p-min-delay
// https://leonsilicon.github.io/vue3-spinners/
import ErrorComp from './children/ErrorComp.vue'
import LoadComp from './children/LoadComp.vue'

</script>

<template>
  <h3>A03 Suspense - Vue3</h3>

  <div class="mb-5">

  </div>
</template>

<style scoped>
  .dialog { position: fixed; top: 50px; left: 30%; width: 600px; height: 200px; z-index: 99999; border: 1px solid gray; background-color: white; padding: 10px; }
</style>


<!--
<script>
// npm i p-min-delay
// npm i vue-spinner
import { defineAsyncComponent } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import pMinDelay from 'p-min-delay';

const A01About = defineAsyncComponent(() => {
  return pMinDelay(import('./children/A01BannerAbout.vue'), 2000);
});

export default {
  components: { A01About, PulseLoader },
};
</script>

<template>
  <h3>A03 Suspense - Vue3</h3>

  <div class="mb-5">
    <Suspense>
      <template #default>
        <A01About></A01About>
      </template>
      <template #fallback>
        <PulseLoader></PulseLoader>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
  .dialog { position: fixed; top: 50px; left: 30%; width: 600px; height: 200px; z-index: 99999; border: 1px solid gray; background-color: white; padding: 10px; }
</style>
-->