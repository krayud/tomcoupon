import * as Tokens from '@/helpers/tokens';

// let autoLoginResolver;
// let autoLoginPromise = new Promise((resolve) => { autoLoginResolver = resolve; });

export default {
  namespaced: true,
  state: {
    id: undefined,
    role: undefined,
    name: undefined,
    logged: false,
    isLoginProcess: false,
  },
  getters: {
    isLogin: () => false,
    getUserName: (state) => state.name,
    isLoginProcess: (state) => state.isLoginProcess,
    isUserAdmin: (state) => state.role === 1,
    isUserProvider: (state) => state.role === 2,
    isAuth: (state) => state.logged,
  },
  mutations: {
    setLoginProcess: (state, value) => {
      state.isLoginProcess = value;
    },
    setUserData: (state, payload) => {
      state.id = payload.userId;
      state.role = payload.role;
      state.name = payload.userName;
      state.logged = true;
    },
    clearUser: (state) => {
      state.id = undefined;
      state.role = undefined;
      state.name = undefined;
      state.logged = false;
    },
  },
  actions: {
    async autoLogin(store) {
      const accessTokenFromLocalStore = Tokens.getAccessToken();
      if (accessTokenFromLocalStore) {
        const tokenPayload = Tokens.getJWTPayload(accessTokenFromLocalStore);
        store.commit('setUserData', tokenPayload);
      } else {
        store.dispatch('clearUser');
      }
    },
    startLogin: (store) => {
      store.commit('setLoginProcess', true);
    },
    endLogin: (store) => {
      store.commit('setLoginProcess', false);
    },
    clearUser: (store) => {
      store.commit('clearUser');
      Tokens.cleanTokensData();
    },
    setUserData: (store, data) => {
      const tokenPayload = Tokens.getJWTPayload(data.payload.accessToken);
      Tokens.setTokens(data.payload.accessToken);
      store.commit('setUserData', tokenPayload);
      store.dispatch('endLogin');

      if (tokenPayload.role === 1) {
        data.router.replace({ name: 'CPHome' });
      } else if (tokenPayload.role === 2) {
        data.router.replace({ name: 'OfficeHome' });
      } else {
        data.router.replace({ name: 'Home' });
      }
    },
    refreshUserData: (store, accessToken) => {
      const tokenPayload = Tokens.getJWTPayload(accessToken);
      store.commit('setUserData', tokenPayload);
    },
  },
};
