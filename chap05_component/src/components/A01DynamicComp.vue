<script setup>
import A01BannerHome from './children/A01BannerHome.vue'
import A01BannerAbout from './children/A01BannerAbout.vue'
import A01BannerNews from './children/A01BannerNews.vue'
import { shallowRef } from 'vue'
import { PortalTarget } from 'portal-vue'

// shallowRef => 할당된 변수의 값이 변경되는 경우만 리렌더링
// 객체라면 객체 전체가 변경되는 경우만 반응한다
const current = shallowRef(A01BannerAbout)
const changeCurrent = (comp) => (current.value = comp)
</script>

<template>
  <!-- A02Teleport에서 popup이 이동할 위치 지정 -->
  <PortalTarget name="dist"></PortalTarget>

  <h3>A01 Dynamic Component</h3>

  <!-- 
    KeepAlive => 모든 컴포넌트를 메모이제이션(cache화)
    options:
      include => 문자열 또는 배열. cache화 컴포넌트의 이름을 지정(name 속성값)
      exclude => 문자열 또는 배열. cache화 하지 않을 컴포넌트의 이름을 지정(name 속성값)
        이름은 스페이스 없이 이어서 기술해야 한다
      max => cache될 컴포넌트를 저장할 크기

      cache화 되어 있는 컴포넌트가 로드될때 일부 데이터 갱신은 각 컴포넌트에서
      activated() 메서드로 구현
  -->
  <div class="mb-3">
    <KeepAlive include="aboutComp,homeComp" max="2">
      <component :is="current"></component>
    </KeepAlive>
  </div>

  <div class="mb-5">
    <button @click="() => changeCurrent(A01BannerHome)">HOME</button>
    <button @click="() => changeCurrent(A01BannerAbout)">ABOUT</button>
    <button @click="() => changeCurrent(A01BannerNews)">NEWS</button>
  </div>
</template>

<style scoped>
.banner {
  width: 700px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: white;
  font-size: smaller;
}
h5 {
  font-size: 150%;
  color: gray;
}
</style>

<!-- 
<script>
import A01BannerHome from './children/A01BannerHome.vue';
import A01BannerAbout from './children/A01BannerAbout.vue';
import A01BannerNews from './children/A01BannerNews.vue';

export default {
  components: { A01BannerHome, A01BannerAbout, A01BannerNews },
  data() {
    return {
      compName: 'A01BannerHome',
    };
  },
  methods: {
    changeCurrent(name) {
      this.compName = name;
    },
  },
};
</script>

<template>
  <h3>A01 Dynamic Component</h3>

  <portal-target name="dist"></portal-target>

  <div class="mb-3">
    <component :is="compName"></component>
  </div>

  <div class="mb-5">
    <button @click="() => changeCurrent('A01BannerHome')">HOME</button>
    <button @click="() => changeCurrent('A01BannerAbout')">ABOUT</button>
    <button @click="() => changeCurrent('A01BannerNews')">PRODUCT</button>
  </div>
</template>

<style scoped>
  .banner { width: 700px; padding: 10px; border: 2px solid #CCC; border-radius: 5px; background-color: white; font-size: smaller; }
  h5 { font-size: 150%; color: gray; }  
</style>
-->
