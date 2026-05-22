
// npm i pinia bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

// store 설정
import { createPinia } from 'pinia'

const app = createApp(App);
app.use(createPinia());       // 함수다
app.mount('#app')

