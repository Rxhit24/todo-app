import { createApp } from 'vue'
import * as bootsrap from 'bootstrap'
import store from '../src/store'
import router from '../src/router'
import './style.css'
import App from './App.vue'

createApp(App)
.use(store)
.use(router)
.mount('#app')
