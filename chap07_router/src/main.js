// npm i vue-router@5 bootstrap axios 
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

//router 설정
// 폴더 내부에서 import 해야 할 파일이 index.xx 이름이면 생략 가능
import router from './router'

const app = createApp(App);
app.use(router);
app.mount('#app')
