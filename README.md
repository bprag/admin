# 项目

## 推荐环境

```bash
新版 Visual Studio Code
安装 .vscode/extensions.json 文件中推荐的插件
node 18.x 或 18+
pnpm 8.x 或 8+
```

## 整体架构设计

项目由 较新的前端技术架构 组成。

具体项目结构如下：

```bash
admin/
├── apps/                               # [应用层] 业务系统的具体实现
│   ├── web-main/                       # 主业务系统 (Vue3 + Vite)
│   │   ├── src/
│   │   ├── index.html
│   │   ├── package.json
│   │   └── vite.config.ts              # 引用 @internal/vite-config
│   └── docs/                           # [关键] 组件库文档与预览平台 (VitePress)
│       ├── .vitepress/
│       │   ├── config.ts               # 配置 alias 指向 packages/ui/src
│       │   └── theme/                  # 全局引入 UI 组件
│       ├── guide/                      # 文档 Markdown
│       └── package.json
├── packages/                           # [基础库层] 可复用的业务逻辑与组件
│   ├── ui/                             # 通用 UI 组件库
│   │   ├── src/
│   │   │   ├── components/             # 组件源码
│   │   │   └── index.ts                # 统一导出
│   │   └── package.json
│   ├── core/                           # 核心工具库 (Lodash, 日期处理, 正则等)
│   │   └── package.json
│   ├── request/                        # [原 server] 网络请求层 (Axios 封装, 拦截器)
│   │   └── package.json
│   ├── router-sdk/                     # [原 router] 路由逻辑库 (权限守卫, 动态路由生成器)
│   │   └── package.json
│   ├── hooks/                          # Vue Composables (useRequest, useDark 等)
│   │   └── package.json
│   └── types/                          # 全局共享类型定义 (API Response, Entity)
│       └── package.json
├── internal/                           # [工程化层] 构建配置与规范标准 (Private Packages)
│   ├── vite-config/                    # 统一 Vite 配置 (Base Config, Plugins Preset)
│   │   ├── src/                        # 包含 vue(), unocss(), visualizer() 等默认配置
│   │   └── package.json
│   ├── tailwind-config/                # [原 theme] 统一 Tailwind/UnoCSS 预设
│   │   ├── tailwind.config.js          # 颜色系统, 字体, 断点配置
│   │   └── package.json
│   ├── eslint-config/                  # 统一 ESLint/Prettier 规则
│   │   └── package.json
│   └── tsconfig/                       # 统一 TS 配置 (base.json, vue.json)
│       └── package.json
├── .husky/                             # Git Hooks (commit-msg, pre-commit)
├── .npmrc                              # pnpm 配置 (shamefully-hoist=true 等)
├── .gitignore                          # 标准 Git 忽略文件
├── package.json                        # 根目录配置 (Scripts 聚合)
├── pnpm-workspace.yaml                 # Workspace 定义
├── turbo.json                          # TurboRepo 任务编排配置
└── README.md                           # 项目说明
```

# Git Commit Message 规范（Conventional Commits）

## 1. 规范目标

统一 Git 提交信息格式，用于：

- 自动生成 CHANGELOG
- 自动化版本管理（语义化版本 SemVer）
- 提高提交记录可读性
- 配合 commitlint / simple-git-hooks 做提交校验

---

## 2. 提交信息基本格式

### 示例

```text
feat(auth): add login token refresh logic
fix(ui): fix button alignment issue
docs: update README
```

---

## 3. 字段说明

### 3.1 type（必填）

| 表头     | 表头     |
| -------- | -------- |
| feat     | 新功能   |
| fix      | 修复 bug |
| docs     | 文档     |
| style    | 代码格式 |
| refactor | 重构     |
| perf     | 性能优化 |
| test     | 测试     |
| build    | 构建     |
| ci       | CI 配置  |
| chore    | 杂项     |

### 3.2 scope（可选）

```text
feat(user)
fix(login)
refactor(router)
```

`推荐使用项目中的模块名、包名或业务域`

### 3.3 subject（必填）

提交内容的简要描述：• 使用 现在时• 首字母小写• 不以句号结尾• 不超过 72 个字符

### 4. 提交体（body，可选）

用于描述 为什么修改 / 怎么修改：

```text
feat(order): support batch submit

- add batch submit API
- update validation logic
- improve error handling
```

规则：• 与 subject 空一行• 每行不超过 100 字符

### 5. 页脚（footer，可选）

```text
fix: resolve login crash

Closes #123
```

### 6. 完整示例

```text
feat(auth): support oauth login

- add github oauth flow
- update token verification logic

BREAKING CHANGE: old password login api is removed
```
