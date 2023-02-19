import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/Login.vue';
import MemberList from '../views/members/MemberList.vue';
import MemberCreate from '../views/members/MemberCreate.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/members',
    name: 'MemberList',
    component: MemberList,
  },
  {
    path: '/members/create',
    name: 'MemberCreate',
    component: MemberCreate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;