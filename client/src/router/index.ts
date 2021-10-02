import { createWebHistory, createRouter } from 'vue-router';
import Home from '../pages/Home.vue';

interface Routes {
  path: string;
  name: string;
  component: any;
  props?: any;
}

const routes: Routes[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
