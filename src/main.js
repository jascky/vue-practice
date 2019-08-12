import Vue from 'vue';
import Antd from 'ant-design-vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/antd.css';


Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VueResource);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
