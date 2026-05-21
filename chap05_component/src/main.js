import { createApp } from 'vue'
import App from './App.vue'
import PortalVue from 'portal-vue'


import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App);
app.use(PortalVue);
app.mount('#app')
