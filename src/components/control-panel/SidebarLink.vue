<template>
  <div :class="['link', {'link_active': $route.name === linkData.toRouteName}]">
    <router-link :to="{name: linkData.toRouteName}">
      <div class="link__text">
        {{ linkData.title }}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SidebarLink',
  created() {
  },
  props: {
    linkData: {
      type: Object,
      default: () => ({
        toRouteName: '',
        title: '',
      }),
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .link
    line-height: 40px
    text-transform: uppercase
    font-size: 12px
    height: 40px
    padding: 0px 10px 0px 10px
    &_active
      background-color: #EEF3F5
    a
      text-decoration: none !important
      color: #464646
      font-weight: bold

    &:hover
      background-color: #EEF3F5
</style>
