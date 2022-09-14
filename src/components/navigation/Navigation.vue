<template>
  <div class="navigation">
    <NavigationItem class="navigation__item" v-for="(item, index) in navigationLinks" :key="index" :itemData="item"/>
  </div>
</template>

<script>

import NavigationItem from '@/components/navigation/NavigationItem.vue';

export default {
  name: 'Navigation',
  props: {
  },
  components: {
    NavigationItem,
  },
  data() {
    return {
      navigationLinks: [
        { title: 'Информация о нас', to: 'About' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import "@/assets/css/colors"
  @import "@/assets/css/res-container"

  .navigation
    display: flex
    flex-wrap: wrap
    margin-top: 10px

    &__item
      margin: 0 10px
      text-decoration: none
      text-transform: uppercase
      color: $c-light-gray
      font-weight: bold
      &:hover
        color: $c-yellow

</style>
