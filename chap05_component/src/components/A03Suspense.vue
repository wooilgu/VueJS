ㅁ
<script setup>
// npm i vue3-spinners p-min-delay
// https://leonsilicon.github.io/vue3-spinners/
// eslint-disable-next-line no-unused-vars
import { defineAsyncComponent, Suspense } from 'vue'
// eslint-disable-next-line no-unused-vars
import pMinDelay from 'p-min-delay'
import { VueSpinnerDots } from 'vue3-spinners'

import ErrorComp from './children/ErrorComp.vue'
import LoadComp from './children/LoadComp.vue'

/*
const A01About = defineAsyncComponent(() => {
  return pMinDelay(import('./children/A01BannerAbout.vue'), 2000);
});
*/

// Error 처리 등이 가능한 방식
const A01About = defineAsyncComponent({
  loader() {
    // return pMinDelay(import('./children/A01BannerAbout.vue'), 2000);
    return new Promise((resolve, reject) => {
      setTimeout(
        (check) => {
          if (check) resolve(import('./children/A01BannerAbout.vue'))
          else reject(new Error('파일을 로드 할 수 없습니다...'))
        },
        2000,
        true,
      ) // false로 지정하면 에러 처리를 확인 가능
    })
  },
  onError(err, retry, fail, attemps) {
    console.log(attemps) // 실행 횟수
    if (err && attemps < 3)
      retry() // retry => 재 시도
    else fail() // fail => 실패 처리
  },
  loadingComponent: LoadComp,
  errorComponent: ErrorComp,
  timeout: 5000, // 5초 후에도 로드되지 않으면 에러 처리
  suspensible: true, // true => fallback 컴포넌트 사용, false => loadingComponent 사용
  delay: 500, // loadingComponent를 사용하는 경우 화면에 표시되는 지연 시간 지정
})
</script>

<template>
  <h3>A03 Suspense - Vue3</h3>

  <div class="mb-5">
    <Suspense>
      <template #default><A01About /></template>
      <template #fallback><VueSpinnerDots color="orange" size="100" /></template>
    </Suspense>
  </div>
</template>

<style scoped>
.dialog {
  position: fixed;
  top: 50px;
  left: 30%;
  width: 600px;
  height: 200px;
  z-index: 99999;
  border: 1px solid gray;
  background-color: white;
  padding: 10px;
}
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
