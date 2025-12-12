import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  componentPreview,
  containerPreview,
} from '@vitepress-demo-preview/plugin';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitepress';

interface SidebarItem {
  text: string;
  link: string;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '../../');
const UI_SRC_DIR = path.resolve(PROJECT_ROOT, 'src/ui');

async function getComponentConfig() {
  const sidebarItems: SidebarItem[] = [];
  const rewriteRules: Record<string, string> = {};

  await fs.access(UI_SRC_DIR);
  const dirents = await fs.readdir(UI_SRC_DIR, { withFileTypes: true });

  for (const dirent of dirents) {
    if (!dirent.isDirectory() || dirent.name.startsWith('.')) {
      continue;
    }

    const componentName = dirent.name;
    const componentPath = path.join(UI_SRC_DIR, componentName);
    const docPath = path.join(componentPath, 'index.md');

    try {
      await fs.access(docPath);

      const displayName =
        componentName.charAt(0).toUpperCase() + componentName.slice(1);
      sidebarItems.push({
        text: displayName,
        link: `/components/${componentName}`,
      });

      const relativePath = path.relative(PROJECT_ROOT, docPath);
      const normalizedPath = relativePath.split(path.sep).join('/');
      rewriteRules[normalizedPath] = `components/${componentName}.md`;
    } catch (e) {
      if (e.message.includes('no such file or directory')) {
        continue;
      }
      throw e;
    }
  }

  return { sidebarItems, rewriteRules };
}

// eslint-disable-next-line antfu/no-top-level-await
const { sidebarItems, rewriteRules } = await getComponentConfig();

export default defineConfig({
  title: '@ui',
  srcDir: PROJECT_ROOT,
  srcExclude: ['**/node_modules/**', '**/dist/**'],
  rewrites: {
    'docs/index.md': 'index.md',
    ...rewriteRules,
  },
  themeConfig: {
    sidebar: {
      '/': [{ text: '组件列表', items: sidebarItems }],
    },
  },
  vite: {
    configFile: false,
    plugins: [
      tsconfigPaths({
        root: PROJECT_ROOT,
        projects: ['tsconfig.app.json'],
        loose: true,
      }),
    ],
    server: {
      fs: {
        allow: [PROJECT_ROOT],
      },
    },
  },
  markdown: {
    config(md) {
      const options = {
        alias: {
          '@': path.resolve(PROJECT_ROOT, 'src'),
        },
      };
      md.use(containerPreview, options);
      md.use(componentPreview, options);
    },
  },
});
