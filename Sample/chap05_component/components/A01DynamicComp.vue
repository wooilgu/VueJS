<script setup>
import A01BannerHome from './children/A01BannerHome.vue'
import A01BannerAbout from './children/A01BannerAbout.vue'
import A01BannerNews from './children/A01BannerNews.vue'

</script>

<template>
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

  </div>
  
  <div class="mb-5">
    <button>HOME</button>
    <button>ABOUT</button>
    <button>NEWS</button>
  </div>
</template>

<style scoped>
  .banner { width: 700px; padding: 10px; border: 2px solid #CCC; border-radius: 5px; background-color: white; font-size: smaller; }
  h5 { font-size: 150%; color: gray; }  
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
