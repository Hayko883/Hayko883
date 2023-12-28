import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            path: '/user',
            component: () => import("@/components/HomeComponent.vue"),
        },
        {
            name: 'SignIn',
            path: '/',
            component: () => import("@/components/SignIn.vue")

        },

        {
            name: "LanguageTest",
            path: "/languageTest",
            component: () => import("@/components/person/LanguageTest.vue")
        },
        {
            name: "SignUp",
            path: "/signup",
            component: () => import("@/components/SignUp.vue")
        }
    ]
})
export default router