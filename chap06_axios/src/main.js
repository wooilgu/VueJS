
import { createApp } from 'vue'
import App from './App.vue'

// axios 기본값 설정 - 프로젝트 전체에서 사용되는 axios에 적용된다
import axios from 'axios'

// 기본값 설정
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.timeout = 5000;
// GET으로 받을때 데이터 타입 요청
axios.defaults.headers.common['Accept'] = 'application/json';
// POST, PUT 등으로 데이터를 전달할때 전달되는 데이터 타입
axios.defaults.headers.post['Content-Type'] = 'application/json';

import 'bootstrap/dist/css/bootstrap.css'

createApp(App).mount('#app')

