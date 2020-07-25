import Vue from 'vue';
import vuescroll from 'vuescroll';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

require('dotenv').config();

Vue.config.productionTip = false;

Vue.use(vuescroll, {
  ops: {
    scrollPanel: {
      scrollingX: false,
    },
  },
});

Vue.mixin({
  data() {
    return {
      apiUrl: 'http://localhost:3000/api',
    };
  },
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
