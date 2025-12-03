import type { Routers } from '@plugins/router/creaeteRouterPipe.ts';
import type { RouteLocationNormalizedGeneric } from 'vue-router';

// ----------数据模拟----------
const userStore = {
  state: {
    token() {
      return !!localStorage.getItem('token');
    },
    userInfo: null as any,
    roles: [] as string[],
  },
};
let isLatestMenuData = false;
// ---------------------------
// TODO 获取最新的菜单信息
async function getMenuData() {
  return [
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
    {
      name: 'pages4',
      path: '/pages4',
      component: () => import('@/pages/pages4.vue'),
    },
  ];
}
// TODO 获取菜单是否存在
async function isMenuExist(route: RouteLocationNormalizedGeneric) {
  return !!route.matched.length;
}
const WHITE_LIST = ['/', '/login', '/403', '/404'];
// TODO 是否有登录跳转
function hasRedirectPath(route: RouteLocationNormalizedGeneric) {
  return route.path === '/login' && !!route.query.redirect;
}
// TODO 是否有Token
function hasToken() {
  return userStore.state.token();
}
// ---------------------------

export function initPermission(router: Routers) {
  router.addHooks!({
    name: '白名单',
    hook: 'beforeEach',
    async install(to, _from, next) {
      if (hasToken() && hasRedirectPath(to)) {
        return next(to.query.redirect as string);
      }

      if (WHITE_LIST.includes(to.path)) {
        return next();
      }
    },
  });
  router.addHooks!({
    name: '身份认证',
    hook: 'beforeEach',
    async install(to, _from, next) {
      if (!hasToken()) {
        return next(`/login?redirect=${encodeURIComponent(to.fullPath)}`);
      }
    },
  });
  router.addHooks!({
    name: '最新菜单',
    hook: 'beforeEach',
    async install(to, from, next) {
      if (hasToken() && !isLatestMenuData) {
        try {
          const data = await getMenuData();
          isLatestMenuData = true;
          if (data.length) {
            data.forEach((route) => router.addRoute(route));
            return { ...to, replace: true };
          }
        } catch (err) {
          isLatestMenuData = false;
          console.error(`🚀 ~ 获取菜单失败 =>`, err);
          return next(from);
        }
      }
    },
  });
  router.addHooks!({
    name: '存在菜单',
    hook: 'beforeEach',
    async install(to, _from, next) {
      if (!(await isMenuExist(to))) {
        return next('/404');
      }
      next();
    },
  });
}
