import type { Routers } from '@plugins/router/creaeteRouterPipe.ts';

// TODO 数据模拟
const userStore = {
  state: {
    token: localStorage.getItem('token'),
    userInfo: null as any,
    roles: [] as string[],
  },
  async getUserInfo() {
    return new Promise<void>((resolve, reject) => {
      // 模拟 Token 失效的情况
      if (!this.state.token) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return reject('Token invalid');
      }

      setTimeout(() => {
        this.state.userInfo = { name: 'User', id: 1 };
        this.state.roles = ['admin']; // 假设获取到了 admin 角色
        resolve();
      }, 300);
    });
  },
};
// TODO 获取菜单是否存在
async function isMenuExist(path: string) {
  return !!path;
}
// 获取菜单数据
async function getMenuData() {
  return [];
}
/**
 * 1. 路由存在性
 * 2. 白名单
 * 3. 身份认证
 * 4. 数据获取
 * 5. 权限鉴权
 */
const WHITE_LIST = ['login', '403', '404'];
let isLatestMenuData = false;

export function initPermission(router: Routers) {
  router.addHooks!({
    name: '路由存在性',
    hook: 'beforeEach',
    async install(to, _from, next) {
      if (!isLatestMenuData) {
        await getMenuData();
        isLatestMenuData = true;
      }
      const isExit = await isMenuExist(to.fullPath);
      if (!isExit) {
        return next('/404');
      }
    },
  });
  router.addHooks!({
    name: '白名单',
    hook: 'beforeEach',
    async install(to, _from, next) {
      const isWhiteList = WHITE_LIST.includes(to.fullPath);
      if (isWhiteList) {
        return next(to);
      }
    },
  });
  router.addHooks!({
    name: '身份认证',
    hook: 'beforeEach',
    async install(to, _from, next) {
      const token = userStore.state.token;
      if (!token) {
        return next(`/login?redirect=${to.fullPath}`);
      }
      next(to);
    },
  });
}
