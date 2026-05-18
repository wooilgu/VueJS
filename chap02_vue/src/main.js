// 프로제그 전체 설정을 담당한다.

/*
  1. 프로젝트 전체에서 사용할 css 파일 import
  2. SPA을 위한 라우터 설정
  3. 전역 상태변수 관리를 위한 라이브러리(pinia /vuex) 설정

  4. 사용자 정의 지시자
  5. 사용자 정의 plugin / mixin

  */


import { createApp } from 'vue'

//1. 프로젝트 전체에서 사용할 css 파일 import
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'


//view(메인 View 파일)를 분리할 파일
import App from './App.vue'

// APP 내용(Vue 문법)을 JavaScript으로 변환
// mount => innerHTML과 같이 index.html의 id가 app인 요소에 출력
createApp(App).mount('#app')
