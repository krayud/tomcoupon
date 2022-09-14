<template>
  <div class="office-base res-container">
    <header class="header">
      <router-link :to="{ name: 'OfficeHome' }">
        <div class="header__logo"><img style="width: 100%" src="@/assets/imgs/logo.svg"/></div>
      </router-link>
    </header>
    <nav style="padding: 10px">
      <div>Пользователь: {{ userName }}</div>
      <el-button @click="logoutButton" type="danger" size="mini">Выйти</el-button>
    </nav>
    <div class="main-content"><router-view/></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
  name: 'OfficeBase',
  components: {
  },
  computed: {
    ...mapGetters({
      userName: 'user/getUserName',
    }),
  },
  methods: {
    logoutButton() {
      this.$store.dispatch('user/clearUser');
      this.$router.replace({ name: 'Login' });
    },
  },
};
</script>

<style scoped lang="sass">
  @import "@/assets/css/res-container";
  @import '@/assets/css/breakpoints'
  @import "@/assets/css/colors";
  .header
    text-align: center
    padding: 10px 0px

  .header
    display: flex
    @media ($vsmall)
      justify-content: center
    &__logo
      width: 300px
</style>
