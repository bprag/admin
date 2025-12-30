```text
admin/
├── apps/                               # [应用层] 业务系统的具体实现
│   ├── web-main/                       # 主业务系统 (Vue3 + Vite)
│   │   ├── src/
│   │   ├── index.html
│   │   ├── package.json
│   │   └── vite.config.ts              # 引用 @internal/vite-config
│   │
│   └── docs/                           # [关键] 组件库文档与预览平台 (VitePress)
│       ├── .vitepress/
│       │   ├── config.ts               # 配置 alias 指向 packages/ui/src
│       │   └── theme/                  # 全局引入 UI 组件
│       ├── guide/                      # 文档 Markdown
│       └── package.json
│
├── packages/                           # [基础库层] 可复用的业务逻辑与组件
│   ├── ui/                             # 通用 UI 组件库
│   │   ├── src/
│   │   │   ├── components/             # 组件源码
│   │   │   └── index.ts                # 统一导出
│   │   └── package.json
│   │
│   ├── core/                           # 核心工具库 (Lodash, 日期处理, 正则等)
│   │   └── package.json
│   │
│   ├── request/                        # [原 server] 网络请求层 (Axios 封装, 拦截器)
│   │   └── package.json
│   │
│   ├── router-sdk/                     # [原 router] 路由逻辑库 (权限守卫, 动态路由生成器)
│   │   └── package.json
│   │
│   ├── hooks/                          # Vue Composables (useRequest, useDark 等)
│   │   └── package.json
│   │
│   └── types/                          # 全局共享类型定义 (API Response, Entity)
│       └── package.json
│
├── internal/                           # [工程化层] 构建配置与规范标准 (Private Packages)
│   ├── vite-config/                    # 统一 Vite 配置 (Base Config, Plugins Preset)
│   │   ├── src/                        # 包含 vue(), unocss(), visualizer() 等默认配置
│   │   └── package.json
│   │
│   ├── tailwind-config/                # [原 theme] 统一 Tailwind/UnoCSS 预设
│   │   ├── tailwind.config.js          # 颜色系统, 字体, 断点配置
│   │   └── package.json
│   │
│   ├── eslint-config/                  # 统一 ESLint/Prettier 规则
│   │   └── package.json
│   │
│   └── tsconfig/                       # 统一 TS 配置 (base.json, vue.json)
│       └── package.json
│
├── .husky/                             # Git Hooks (commit-msg, pre-commit)
├── .npmrc                              # pnpm 配置 (shamefully-hoist=true 等)
├── .gitignore                          # 标准 Git 忽略文件
├── package.json                        # 根目录配置 (Scripts 聚合)
├── pnpm-workspace.yaml                 # Workspace 定义
├── turbo.json                          # TurboRepo 任务编排配置
└── README.md                           # 项目说明
```
