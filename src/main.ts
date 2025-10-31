import { createApp } from 'vue';
import App from './App.vue';
// css 注入
import '@style/normalize.css';
import '@style/theme.css';
import '@style/utilities.css';

createApp(App).mount('#app');
