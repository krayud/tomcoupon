import store from '@/store';
// import OfficeBase from '@/views/office/OfficeBase.vue';
// import OfficeHomePage from '@/views/office/OfficeHome.vue';
// import OfficeAction from '@/views/office/OfficeAction.vue';

const OfficeBase = () => import(/* webpackChunkName: "office" */ '@/views/office/OfficeBase.vue');
const OfficeHomePage = () => import(/* webpackChunkName: "office" */ '@/views/office/OfficeHome.vue');
const OfficeAction = () => import(/* webpackChunkName: "office" */ '@/views/office/OfficeAction.vue');

export default [
  {
    path: '/office',
    component: OfficeBase,
    meta: { providerAuth: true },
    children: [
      {
        name: 'OfficeHome',
        path: '',
        component: OfficeHomePage,
      },
      {
        name: 'OfficeAction',
        path: 'action/:id',
        component: OfficeAction,
      },
    ],
    beforeEnter: (to, from, next) => {
      if (store.getters['user/isAuth'] && (store.getters['user/isUserProvider'] || store.getters['user/isUserAdmin'])) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
  },
];
