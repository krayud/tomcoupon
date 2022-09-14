import Vue from 'vue';
import store from '@/store';
import VueRouter from 'vue-router';

import E404 from '@/views/static-pages/E404.vue';
import Base from '@/views/Base.vue';
import Home from '@/views/Home.vue';
import Partners from '@/views/static-pages/Partners.vue';
import PaymentInfo from '@/views/static-pages/PaymentInfo.vue';
import ActionInfo from '@/views/ActionInfo.vue';
import OfferInfo from '@/views/static-pages/Offer.vue';
import PaymentSuccess from '@/views/static-pages/PaymentSuccess.vue';
import PrivacyInfo from '@/views/static-pages/Privacy.vue';
import PaymentFail from '@/views/static-pages/PaymentFail.vue';
import ReturnInfo from '@/views/static-pages/ReturnInfo.vue';
import About from '@/views/static-pages/About.vue';

import controlPanelModule from './control-panel';
import officeModule from './office';

Vue.use(VueRouter);

const routes = [
  ...controlPanelModule,
  ...officeModule,
  {
    path: '/',
    component: Base,
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Home,
        children: [
          {
            name: 'Category',
            path: 'category/:categoryUrl',
            component: Home,
          },
        ],
      },
      {
        name: 'ActionInfo',
        path: 'action/:id',
        component: ActionInfo,
      },
      {
        name: 'PaymentInfo',
        path: 'payment-info',
        component: PaymentInfo,
      },
      {
        name: 'OfferInfo',
        path: 'offer',
        component: OfferInfo,
      },
      {
        name: 'About',
        path: 'about',
        component: About,
      },
      {
        name: 'PrivacyInfo',
        path: 'privacy',
        component: PrivacyInfo,
      },
      {
        name: 'ReturnInfo',
        path: 'return',
        component: ReturnInfo,
      },
      {
        name: 'Partners',
        path: 'partners',
        component: Partners,
      },
      {
        name: 'PaymentSuccess',
        path: 'payment-success',
        component: PaymentSuccess,
      },
      {
        name: 'PaymentFail',
        path: 'payment-fail',
        component: PaymentFail,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.getters['user/isAuth']) {
        next();
      } else if (store.getters['user/isUserAdmin']) {
        next({ name: 'CPHome' });
      } else if (store.getters['user/isUserProvider']) {
        next({ name: 'OfficeHome' });
      }
    },
  },
  {
    path: '*',
    component: E404,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.adminAuth) && !store.getters['user/isUserAdmin']) {
    next({ name: 'Login' });
  } else {
    next();
  }

  if (to.matched.some((route) => route.meta.providerAuth) && !store.getters['user/isUserProvider'] && !store.getters['user/isUserAdmin']) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
