import { ElementPlusContainer } from '@vitepress-demo-preview/component';
import DefaultTheme from 'vitepress/theme';
import '@vitepress-demo-preview/component/dist/style.css';
import '../../../src/assets/style/normalize.css';
import '../../../src/assets/style/theme.css';
import '../../../src/assets/style/utilities.css';
import '../../../src/assets/style/components.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('demo-preview', ElementPlusContainer);
  },
};
