const HomeRouter = {
  path: '/',
  home: 'home',
  component: () => import('@/pages/home.vue'),
};
const LoginRouter = {
  path: '/login',
  home: 'login',
  component: () => import('@/pages/login.vue'),
};
const ErrorRouter = {
  name: '404',
  path: '/404',
  component: () => import('@/pages/404.vue'),
};

export const routes = [HomeRouter, LoginRouter, ErrorRouter];
