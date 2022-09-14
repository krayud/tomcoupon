<template>
  <div class="header-content">
    <router-link :to="{ name: 'Home' }">
      <div class="header-content__logo">
          <div><img style="width: 100%" src="@/assets/imgs/logo.svg"/></div>
      </div>
    </router-link>
    <Navigation/>
  </div>
</template>

<script>
import Navigation from '@/components/navigation/Navigation.vue';

export default {
  name: 'Header',
  props: {
  },
  components: {
    Navigation,
  },
  data() {
    return {

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import "@/assets/css/colors";
  @import "@/assets/css/res-container";

  .header-content
    padding: 10px 0px
    display: flex
    justify-content: space-between
    align-items: center
    &__logo
      display: flex
      align-items: center
      width: 400px

    @media ($medium)
      flex-direction: column
      &__logo
        display: flex
        align-items: center
        width: 300px
    @media ($small)
      flex-direction: column

</style>
