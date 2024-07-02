import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import NewPage from '../components/NewPage.vue';
import AdminLogin from '../components/AdminLogin.vue';
import AdminDashboard from '../components/AdminDashboard.vue';
import CourseDetails from '../components/CourseDetails.vue'; // Import CourseDetails component

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
  },
  {
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/course/:id',
    name: 'CourseDetails',
    component: CourseDetails,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
