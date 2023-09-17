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
    {
      path: "/create-exercise",
      name: "create-exercise",
      component: () => import("../views/CreateExercise.vue"),
    },
    {
      path: "/manage-exercises",
      name: "manage-exercises",
      component: () => import("../views/ManageExercise.vue"),
    },
    {
      path: "/manage-workouts",
      name: "manage-workouts",
      component: () => import("../views/ManageWorkouts.vue"),
    },
  ],
});

export default router;
