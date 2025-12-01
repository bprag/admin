import type { RouterOptions } from 'vue-router';
import type { Routers } from './creaeteRouterPipe.ts';
import { createRouter } from 'vue-router';
import { createRouterPipe } from './creaeteRouterPipe.ts';

export default function createRouters(options: RouterOptions): Routers {
  const router = createRouter(options) as unknown as Routers;
  createRouterPipe(router);
  return router;
}
