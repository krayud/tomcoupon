<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('data/loadCategories');
    document.addEventListener('refreshTokens', this.refreshTokens);
    document.addEventListener('cantRefreshToken', this.cantRefreshToken);
  },
  beforeDestroy() {
    document.removeEventListener('refreshTokens', this.refreshTokens);
    document.removeEventListener('cantRefreshToken', this.cantRefreshToken);
  },
  methods: {
    refreshTokens({ detail }) {
      this.$store.dispatch('user/refreshUserData', detail);
    },
    cantRefreshToken() {
      this.$store.dispatch('user/clearUser');
      this.$router.replace({ name: 'Login' });
    },
  },
};
</script>

<style lang="sass">
@font-face
  font-family: "Montserrat"
  src: url("./assets/fonts/Montserrat-Medium.ttf")
  font-display: swap
*
  font-family: 'Montserrat', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  //padding: 0px
html, body
  margin: 0px
body
  height: 100vh
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin: 0px
  padding: 0px
</style>
