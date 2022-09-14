import categoryAPI from '@/api/category';
import cpAPI from '@/api/cp';

export default {
  namespaced: true,
  state: {
    categories: null,
    usersList: null,
    isLoadingCategories: false,
    isLoadingUsers: false,
  },
  getters: {
    isLoadingCategories: (state) => state.isLoadingCategories,
    catList: (state) => state.categories,
    isLoadingUsers: (state) => state.isLoadingUsers,
    usersList: (state) => state.usersList,
  },
  mutations: {
    setCategories: (state, catsArray) => {
      state.categories = catsArray;
    },
    setUsers: (state, catsArray) => {
      state.usersList = catsArray;
    },
    setCategoriesLoadingState: (state, value) => {
      state.isLoadingCategories = value;
    },
    setUsersLoadingState: (state, value) => {
      state.isLoadingUsers = value;
    },
  },
  actions: {
    loadCategories: (store) => {
      store.commit('setCategoriesLoadingState', true);
      categoryAPI.getAll()
        .then((response) => {
          if (response.data.res) {
            store.commit('setCategories', response.data.payload);
          }
          store.commit('setCategoriesLoadingState', false);
        });
    },
    loadUsers: (store) => {
      store.commit('setUsersLoadingState', true);
      cpAPI.getAllUsers()
        .then((response) => {
          if (response.data.res) {
            store.commit('setUsers', response.data.payload);
          }
          store.commit('setUsersLoadingState', false);
        });
    },
  },
};
