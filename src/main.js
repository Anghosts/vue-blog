import Vue from 'vue';
import App from './App.vue';
// 引入 element-ui
import ElementUI from 'element-ui';
// 引入 css
import '@/assets/element-theme/index.css';
import '@/style/element-reset.css';
import '@/style/hlcode/hlcode.css';
import '@/style/reset.css';
// 引入主题
import '@/style/theme/light.css';
import '@/style/theme/dark.css';
// 引入路由
import router from './router';
// 引入 mock
import '@/utils/mock';
// 引入全局组件
import Copyright from '@/components/Copyright';
import ScrollTop from '@/components/ScrollTop';
// 引入SmileySans字体
import '@/assets/font/smiley-sans/SmileySans.css';

// 应用 element-ui
Vue.use(ElementUI);
// 注册全局组件
Vue.component(Copyright.name, Copyright);
Vue.component(ScrollTop.name, ScrollTop);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
    // 添加全局事件总线 $bus
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
