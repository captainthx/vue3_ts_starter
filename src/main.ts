import { createApp } from 'vue'
import './main.css'
import './assets/bootstrap-icons/bootstrap-icons.css'
import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/route'
createApp(App).use(router).use(createPinia()).use(VueAnimXyz).mount('#app')
