import type { Router } from 'vue-router';

type Hooks = `before${string}` | `after${string}`;
export type RouterHooks = Extract<keyof Router, Hooks>;

type RouterCallback<K extends RouterHooks> = K extends keyof Router
  ? Parameters<Router[K]>[0]
  : never;

type HookParams<K extends RouterHooks> = Parameters<RouterCallback<K>>;

type HookReturns<K extends RouterHooks> = ReturnType<RouterCallback<K>>;

interface RouterPipeItem<K extends RouterHooks> {
  name: string;
  hook: K;
  install: (...args: HookParams<K>) => HookReturns<K>;
}

type RouterPipe = {
  [K in RouterHooks]?: RouterPipeItem<K>[];
};
type RegisterStrategy = (router: Routers, hookName: any) => void;

export interface Routers extends Router {
  pipe?: RouterPipe;
  addHooks?: <K extends RouterHooks>(options: RouterPipeItem<K>) => void;
}

const resolvedPromise = Promise.resolve();

const hookStrategies: Partial<Record<RouterHooks, RegisterStrategy>> = {
  beforeEach: registerGuardHook,
  beforeResolve: registerGuardHook,
  afterEach: registerAfterHook,
};

export function createRouterPipe(router: Routers) {
  normalizePipe(router);
  normalizeAddHooks(router);
}

function normalizePipe(router: Routers) {
  const pipeStore = Object.create(null) as RouterPipe;

  router.pipe = new Proxy(pipeStore, {
    get(target, p: string) {
      const key = p as RouterHooks;
      // 利用逻辑赋值运算符简化代码
      return (target[key] ||= []);
    },
  });
}

function normalizeAddHooks(router: Routers) {
  router.addHooks = (options) => {
    const { hook } = options;
    const currentPipe = router.pipe![hook];

    currentPipe?.push(options);

    if (currentPipe?.length === 1) {
      distributeHook(router, hook);
    }
  };
}

function registerGuardHook(
  router: Routers,
  hookName: 'beforeEach' | 'beforeResolve',
) {
  router[hookName](async (to, from, next) => {
    let isNextEnd = false;
    let end: any;
    const _next: typeof next = (...args: any[]) => {
      isNextEnd = true;
      return next(...(args as Parameters<typeof next>));
    };

    const pipes = router.pipe?.[hookName] || [];

    for (const pipe of pipes) {
      end = await resolvedPromise.then(() => {
        const args = [to, from, _next] as unknown as HookParams<
          typeof hookName
        >;
        return pipe.install(...args);
      });

      if (isNextEnd) {
        return;
      }
      if (typeof end !== 'undefined') {
        return _next(end);
      }
    }
  });
}

function registerAfterHook(router: Routers, hookName: 'afterEach') {
  router[hookName](async (to, from, failure) => {
    const pipes = router.pipe?.[hookName] || [];

    for (const pipe of pipes) {
      await resolvedPromise.then(() => {
        const args = [to, from, failure] as unknown as HookParams<
          typeof hookName
        >;
        return pipe.install(...args);
      });
    }
  });
}

function distributeHook(router: Routers, hookName: RouterHooks) {
  const strategy = hookStrategies[hookName];
  if (strategy) {
    strategy(router, hookName);
  } else {
    throw new Error(`[RouterPipe] Unsupported hook: ${hookName}`);
  }
}
