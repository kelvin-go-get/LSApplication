// src/router/index.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import TheWelcomeView from '../views/TheWelcomeView.vue'
import TodoView from '../views/TodoView.vue'

// Define routes with proper typing
const routes: Array<RouteRecordRaw> = [
  { path: '/', component: TheWelcomeView },
  { path: '/todo-app', component: TodoView },
]

// Create the router instance with TypeScript types
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
