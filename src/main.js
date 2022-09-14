import Vue from 'vue';
import VueMeta from 'vue-meta';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import api from './api';

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;
Vue.prototype.$api = api;

store.dispatch('user/autoLogin')
  .then(() => {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  });
