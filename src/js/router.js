import {createRouter, createWebHashHistory} from "vue-router";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: () => import("../components/HomeComponent.vue")
        }
    ]
})
export default router