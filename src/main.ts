import { createApp } from 'vue';
// 路由注入
import router from '@/router';
import App from './App.vue';
// css 注入
import '@style/normalize.css';
import '@style/theme.css';
import '@style/utilities.css';
import '@style/components.css';

createApp(App).use(router).mount('#app');
