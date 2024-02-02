import { createApp } from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
import './assets/styles/main.css';
import router from "./js/router"
import axios from "axios";
import VueTailwindDatepicker from 'vue-tailwind-datepicker'


axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.interceptors.request.use(function (config) {
    config.headers['X-Binarybox-Api-Key'] = process.env.VUE_APP_API_KEY;
    return config;
});


const pinia = createPinia()
createApp(App).use(router).mount('#app')

createApp(App).use(pinia).use(VueTailwindDatepicker)
