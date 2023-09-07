import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "login",
            component: Login,
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/About.vue"),
        },
        {
            path: "/signup",
            name: "signup",
            component: () => import("../views/Signup.vue"),
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import("../views/Dashboard.vue"),
        },
        {
            path: "/students",
            name: "students",
            component: () => import("../views/Students.vue"),
        },
        {
            path: "/create-student",
            name: "create-student",
            component: () => import("../views/CreateStudent.vue"),
        },
    ],
});

export default router;
