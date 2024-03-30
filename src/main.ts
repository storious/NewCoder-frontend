import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@icon-park/vue-next/styles/index.css';
import '@arco-design/web-vue/dist/arco.css';
import router from './router';
import store from './store';
import "./access"
import * as echarts from 'echarts';



const app = createApp(App);
app.use(ArcoVue);
app.use(store);
app.use(router);
app.config.globalProperties.$echarts = echarts;
app.mount('#app');