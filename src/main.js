import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import router from "./router"
import store from "./store"
import { createHead } from '@vueuse/head'
const head = createHead()
createApp(App).use(head).use(router).use(store).mount('#app')
