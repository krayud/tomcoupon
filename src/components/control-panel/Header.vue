<template>
  <div class="header">
    <router-link :to="{name: 'CPHome'}">Томские купоны</router-link>
    <div @click="logOutBtn">Выйти</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
  },
  methods: {
    logOutBtn() {
      this.$store.dispatch('user/clearUser');
      this.$router.replace({ name: 'Login' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .header
    background-color: #2F333E
    display: flex
    align-items: center
    padding: 0px 10px 0px 10px
  a
    color: white
    text-decoration: none
    text-transform: uppercase
</style>
