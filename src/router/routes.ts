import { AuthLayout } from '@/auth/index.ts';

const HomeRouter = {
  path: '/',
  home: 'home',
  component: () => import('@/pages/home.vue'),
};

const LoginRouter = {
  component: AuthLayout,
  name: 'auth',
  path: '/auth',
  redirect: '/auth/login',
  children: [
    {
      name: 'login',
      path: 'login',
      component: () => import('@/auth/login.vue'),
    },
  ],
};

const ErrorRouter = {
  name: '404',
  path: '/404',
  component: () => import('@/pages/404.vue'),
};

export const routes = [HomeRouter, LoginRouter, ErrorRouter];
