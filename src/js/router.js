import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            path: '/user',
            component: () => import("@/components/HomeComponent.vue"),
            meta: { requiresAuth: true },
        },
        {
            name: 'SignIn',
            path: '/',
            component: () => import("@/components/SignIn.vue")
        },
        {
            name: "LanguageTest",
            path: "/user/:item",
            component: () => import("@/components/person/LanguageTest.vue"),
            meta: {requiresAuth: true},
        },
        {
            name: "SkillTest",
            path: "/user/:type",
            component: () => import("@/components/person/SkillTest.vue"),
            meta: {requiresAuth: true},
        },
        {
            name: "SignUp",
            path: "/signup",
            component: () => import("@/components/SignUp.vue")
        }
    ]
});
export default router