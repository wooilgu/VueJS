<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'

const route = useRoute() // 주소줄 정보
const router = useRouter() // 링크에 관련된 메서드
console.log(route)
console.log(router)

const back = () => {
  router.back()
  // router.go(-1);
}
const forward = () => {
  router.forward()
  // router.go(1);
}
const goHome = () => {
  router.push('/')
  // router.push('/Attr');
}
const goURL = (url) => {
  if (typeof url === 'string') {
    // replace: true => history 정보를 남기지 않고 이동. <-(뒤로가기)에서 제외
    router.push({ path: url, replace: true })
  } else {
    router.push({ ...url, replace: true })
  }
}

// Guard
// params와 query가 변경되는 경우 실행
onBeforeRouteUpdate(() => {
  console.log('----- 컴포넌트 => onBeforeRouteUpdate -----')
  const session = window.localStorage
  return session.getItem('address') ? true : false
})
// 다른 컴포넌트로 이동하는 경우
onBeforeRouteLeave(() => {
  console.log('----- 컴포넌트 => onBeforeRouteLeave -----')
  const session = window.localStorage
  return session.getItem('tel') ? true : false
})
</script>

<template>
  <div>
    <h3>A07 Push</h3>

    <div>
      <button @click="back">BACK</button>
      <button @click="forward">FORWARD</button>
      <button @click="goHome">HOME</button>
      <button @click="goURL('/A02Attr')">A02Attr</button>

      <!-- 객체 형태의 데이터 전달은 name 사용 -->
      <button @click="goURL({ name: 'attr' })">A02Attr</button>
      <button @click="goURL({ name: 'param', params: { no: '1001', name: 'ABC', sno: 1 } })">
        Params
      </button>
      <button
        @click="goURL({ name: 'query', query: { no: '1002', name: 'DEF', sno: 2 }, hash: '#BTM' })"
      >
        Query
      </button>
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
