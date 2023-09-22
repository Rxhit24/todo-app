import { createRouter, createWebHistory } from "vue-router";
import Todo from "./components/Todo.vue";
import Notodo from "./components/Notodo.vue";
import Todoform from "./components/Todoform.vue";

const routes = [
  {
    path: "/",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/notodo",
    name: "Notodo",
    component: Notodo,
  },
  {
    path: "/todoform",
    name: "Todoform",
    component: Todoform,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
