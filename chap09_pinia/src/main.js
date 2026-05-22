// npm i bootstrap axios vue-router pinia sweetalert2 
import { createApp } from 'vue'
import App from './App.vue'
// store 등록
import { createPinia } from 'pinia';
// router 등록
import router from './router';
// axios 등록
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.timeout = 5000;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 프로젝트 전체에서 사용할 CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// 사용자 정의 plugin, 사용자 정의 directive, mixin

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app')
