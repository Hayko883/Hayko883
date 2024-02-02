import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Admin',
            path: '/admin',
            component: () => import("@/components/admin/Home.vue"),
        },
        {
            name: "AllUsers",
            path: "/admin/users",
            component: () => import("@/components/admin/Users.vue")
        },
        {
            name: "EditUser",
            path: "/admin/user/:id",
            component: () => import("@/components/admin/EditUser.vue")
        },
        {
            name: "CreateUser",
            path: "/admin/createUser",
            component: () => import("@/components/admin/CreateUser.vue")
        },
        {
            name: 'ShowUser',
            path: '/admin/user/show/:id',
            component: () => import("@/components/admin/showUser/HomeUser.vue"),
            meta: { requiresAuth: true },
        },
        {
            name: 'Home',
            path: '/user/:id',
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
            path: "/user/language/:item",
            component: () => import("@/components/person/LanguageTest.vue"),
            meta: {requiresAuth: true},
        },
        {
            name: "SkillTest",
            path: "/user/skill/:type",
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