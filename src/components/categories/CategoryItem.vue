<template>
  <router-link class="link" :to="{ path: `/category/${ itemData.url }`}" :title="itemData.alt">
    <div :class="['category-item',
    { 'category-item_active': this.$route.params.categoryUrl === itemData.url }]">
      <div><slot/></div>
      <div class="category-item__title">{{ itemData.title }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: {
    itemData: {
      type: Object,
      default: () => {},
    },
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

  .link
    text-decoration: none
  .category-item
    width: 90px
    height: 90px
    padding: 10px
    display: flex
    justify-content: flex-end;
    flex-direction: column
    align-items: center
    &__title
      text-transform: uppercase
      text-decoration: none
      color: $c-light-gray
      font-size: 16px
      font-weight: bold
    &_active
      background-color: $c-light-blue
      border-radius: 10px
    &_active &__title
      color: $c-yellow

</style>
