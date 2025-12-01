import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths({ loose: true }), vue()],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        normalize: resolve(__dirname, './src/assets/style/normalize.css'),
        theme: resolve(__dirname, './src/assets/style/theme.css'),
        utilities: resolve(__dirname, './src/assets/style/utilities.css'),
      },
    },
  },
});
