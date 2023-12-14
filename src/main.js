import { createApp } from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
import './assets/styles/main.css';
import router from "./js/router"

const pinia = createPinia()
createApp(App).use(router).mount('#app')

createApp(App).use(pinia)
