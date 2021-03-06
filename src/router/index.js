import Vue from 'vue';
import VueRouter from 'vue-router';
import api from '../utils/api';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/channels/:serverId/:channelId',
    name: 'Servers',
    component: () => import('../views/ServerChannel.vue'),
  },
  {
    path: '/servers/:id',
    name: 'ServerRedirect',
    component: () => import('../views/ServerRedirect.vue'),
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('api_key')) next();
      else next({ path: '/' });
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.name !== 'Login') {
    if (!localStorage.getItem('api_key')) next({ name: 'Login' });
    else {
      try {
        const response = await api.get('/auth/verify');
        if (response.data.loggedIn) next();
        else next({ name: 'Login' });
      } catch (e) {
        localStorage.removeItem('api_key');
        next({ name: 'Login' });
      }
    }
  } else next();
});

export default router;
