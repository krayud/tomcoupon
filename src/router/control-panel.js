// import CPBase from '@/views/control-panel/CPBase.vue';
// import Home from '@/views/control-panel/Home.vue';
import store from '@/store';
// import ActionEditorPage from '@/views/control-panel/ActionEditorPage.vue';
// import ActionsListPage from '@/views/control-panel/ActionsListPage.vue';
// import ActionCoupons from '@/views/control-panel/ActionCouponsPage.vue';
// import UsersPage from '@/views/control-panel/UsersPage.vue';

const CPBase = () => import(/* webpackChunkName: "cp" */ '@/views/control-panel/CPBase.vue');
const Home = () => import(/* webpackChunkName: "cp" */ '@/views/control-panel/Home.vue');
const ActionEditorPage = () => import(/* webpackChunkName: "cp" */ '@/views/control-panel/ActionEditorPage.vue');
const ActionsListPage = () => import(/* webpackChunkName: "cp" */ '@/views/control-panel/ActionsListPage.vue');
const ActionCoupons = () => import(/* webpackChunkName: "cp" */ '@/views/control-panel/ActionCouponsPage.vue');
const UsersPage = () => import(/* webpackChunkName: "cp" */ '@/views/control-panel/UsersPage.vue');

// import store from '../store';

export default [
  {
    path: '/cp',
    component: CPBase,
    meta: { adminAuth: true },
    children: [
      {
        name: 'CPHome',
        path: '',
        component: Home,
      },
      {
        name: 'ActionEdit',
        path: 'edit-action/:id',
        component: ActionEditorPage,
      },
      {
        name: 'ActionAdd',
        path: 'add-action',
        component: ActionEditorPage,
      },
      {
        name: 'ActionsListPage',
        path: 'actions-list',
        component: ActionsListPage,
      },
      {
        name: 'UsersPage',
        path: 'users',
        component: UsersPage,
      },
      {
        name: 'ActionCoupons',
        path: 'action-coupons/:id',
        component: ActionCoupons,
      },
    ],
    beforeEnter: (to, from, next) => {
      if (store.getters['user/isAuth'] && store.getters['user/isUserAdmin']) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
  },
];
