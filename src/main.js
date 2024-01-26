
import './assets/base.css'
import { createApp } from 'vue'  
import App from './App.vue'
import { createPinia } from 'pinia'
import router from "./router/index.js";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')
  