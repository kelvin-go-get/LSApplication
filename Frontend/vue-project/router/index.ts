import { createRouter, createWebHistory } from 'vue-router';
import Customer from '../views/Customer.vue';
import Project from '../views/Project.vue';

const routes = [
  { path: '/customers', component: Customer },
  { path: '/projects', component: Project }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
