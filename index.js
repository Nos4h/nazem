import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AdminLogin from '../components/AdminLogin.vue';
import CourseDetails from '../components/CourseDetails.vue';
import Courses from '../components/Courses.vue';
import AdminDashboard from '../components/AdminDashboard.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/course/:id',
    name: 'CourseDetails',
    component: CourseDetails,
    props: true
  },
  {
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
