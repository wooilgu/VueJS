<script setup>
const back = () => {

};
const forward = () => {

};
const goHome = () => {

};
const goURL = () => {

};
</script>

<template>
  <div>
    <h3>A07 Push</h3>

    <div>
      <button   @click="back">BACK</button>
      <button   @click="forward">FORWARD</button>
      <button   @click="goHome">HOME</button>
      <button   @click="goURL('/A02Attr')">A02Attr</button>

      <!-- 객체 형태의 데이터 전달은 name 사용 -->
      <button>A02Attr</button>
      <button>Params</button>
      <button>Query</button>
    </div>
  </div>
</template>

<!--
<script>
export default {
  methods: {
    back: function(){
      // this.$router.back();
      this.$router.go(-1);
    },
    forward: function() {
      // this.$router.forward();
      this.$router.go(1);
    },
    goHome: function() {
      this.$router.push('/');
    },
    goURL: function(url) {
      this.$router.push(url);
      // this.$router.replace(url);   // history를 남기지 않는다
    },
  },
  created() {
    // console.log(this.$router)
  },
  beforeRouteEnter(to, from) {
    console.log('---------- 컴포넌트 beforeRouteEnter ----------')

    const session = window.sessionStorage;
    if (session.getItem('address')) return true;
    else return false;
  },
  beforeRouteUpdate(to, from) {
    console.log('---------- 컴포넌트 beforeRouteUpdate ----------')

    const session = window.sessionStorage;
    if (session.getItem('address')) return true;
    else return false;
  },
  beforeRouteLeave(to, from) {
    console.log('---------- 컴포넌트 beforeRouteLeave ----------')

    const session = window.sessionStorage;
    if (session.getItem('address')) return true;
    else return false;
  }
}
</script>

<template>
  <div>
    <h3>A07 Push</h3>

    <div>
      <button   @click="back">BACK</button>
      <button   @click="forward">FORWARD</button>
      <button   @click="goHome">HOME</button>
      <button   @click="goURL('/A02Attr')">A02Attr</button>

      <button @click="goURL({name: 'attr'})">A02Attr</button>
      <button @click="goURL({name: 'param', params: {id: '1002', name: 'ABC', no: 50}})">Params</button>
      <button @click="goURL({name: 'query', query: {id: '1003', name: 'DEF', no: 51}, hash: '#BTN'})">Query</button>
    </div>
  </div>
</template>
-->