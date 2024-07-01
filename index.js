import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import NewPage from '../components/NewPage.vue';
import AdminLogin from '../components/AdminLogin.vue'; // استيراد صفحة تسجيل الدخول

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/new-page',
    name: 'NewPage',
    component: NewPage
  },
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: AdminLogin
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;