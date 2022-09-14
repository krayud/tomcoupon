<template>
  <router-link class="header-content__item" :to="{ name: itemData.to }"> {{ itemData.title }}</router-link>
</template>

<script>
export default {
  name: 'NavigationItem',
  props: {
    itemData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
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

</style>
