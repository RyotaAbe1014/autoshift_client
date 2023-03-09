import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/Login.vue';
import MemberList from '../views/members/MemberList.vue';
import MemberCreate from '../views/members/MemberCreate.vue';
import MenberEdit from '../views/members/MenberEdit.vue';
import ShiftCreate from '../views/shift/ShiftCreate.vue';
import ShiftAll from '../views/shift/ShiftAll.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
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
  {
    path: '/members/:id/edit',
    name: 'MenberEdit',
    component: MenberEdit,
  },
  {
    path: '/shifts/create',
    name: 'ShiftCreate',
    component: ShiftCreate,
  },
  {
    path: '/shifts/',
    name: 'ShiftAll',
    component: ShiftAll,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


// 認証
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token');
  if (to.name !== 'Login' && !token) {
    next({ name: 'Login' });
  } else {
    next();
  }
});


export default router;