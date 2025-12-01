import createRouters from '@plugins/router/index.ts';
import { initPermission } from '@router/permission.ts';
import { routes } from '@router/routes.ts';
import { createWebHistory } from 'vue-router';

const router = createRouters({
  history: createWebHistory(),
  routes,
});

initPermission(router);

export default router;
