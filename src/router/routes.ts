export const routes = [
  { path: '/', component: () => import('@/pages/home.vue') },
  {
    name: 'pages1',
    path: '/pages1',
    component: () => import('@/pages/pages1.vue'),
  },
  {
    name: 'pages2',
    path: '/pages2',
    component: () => import('@/pages/pages2.vue'),
  },
  {
    name: 'pages3',
    path: '/pages3',
    component: () => import('@/pages/pages3.vue'),
  },
];
