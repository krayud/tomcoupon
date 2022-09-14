<template>
  <div class="page-wrapper">
    <header class="res-container header"><Header/></header>
    <section class="nav"><CategoriesList/></section>
    <main class="res-container main">
      <div class="main-content"><router-view/></div>
    </main>
    <footer class="footer"><Footer/></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import CategoriesList from '@/components/categories/CategoriesList.vue';

export default {
  name: 'Base',
  components: {
    Footer,
    Header,
    CategoriesList,
  },
};
</script>

<style scoped lang="sass">
  @import "@/assets/css/res-container";
  @import "@/assets/css/colors";

  .page-wrapper
    min-height: 100%
    display: flex
    flex-direction: column
    height: 100%
    .header, .nav, .footer
      flex: 0 0 auto
    .main
      flex: 1 0 auto
    .nav
      background-color: $c-white
    .footer
      background-color: $c-dark-purple
    .main-content
      padding: 10px
</style>

<style lang="sass">
  @import "@/assets/css/colors";

  body
   background-color: $c-light-blue
</style>
