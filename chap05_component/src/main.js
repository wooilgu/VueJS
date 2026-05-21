import { createApp } from 'vue'
import App from './App.vue'
import PortalVue from 'portal-vue'

import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)
app.use(PortalVue)

app.config.errorHandler = (err, vm, info) => {
  console.error('----- main -----')
  console.error(err) // Error 객체
  console.error(vm) // 에러가 발생한 컴포넌트
  console.error(info) // Vue가 제공하는 안내

  // return이 존재하지 않는다
}

// 프로젝트 전체에 대한 경고 처리. 빌드하면 표시되지 않는다
app.config.warnHandler = (err, vm, info) => {
  console.warn('----- main -----')
  console.warn(err) // Error 객체
  console.warn(vm) // 에러가 발생한 컴포넌트
  console.warn(info) // Vue가 제공하는 안내

  // return이 존재하지 않는다
}
app.mount('#app')
