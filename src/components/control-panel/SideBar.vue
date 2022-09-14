<template>
  <div class="sidebar">
    <SidebarLink v-for="(link, index) in linksArray" :key="index" :linkData="link" />
  </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue';

export default {
  name: 'SideBar',
  props: {
  },
  components: {
    SidebarLink,
  },
  data() {
    return {
      linksArray: [
        { toRouteName: 'Home', title: 'На сайт' },
        { toRouteName: 'OfficeHome', title: 'Мой офис' },
        { toRouteName: 'CPHome', title: 'Главная админки' },
        { toRouteName: 'ActionAdd', title: 'Добавить акцию' },
        { toRouteName: 'ActionsListPage', title: 'Список акций' },
        { toRouteName: 'UsersPage', title: 'Пользователи' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .sidebar
    width: 200px
    min-width: 200px
    height: 100%
    background-color: white
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  a
    color: #42b983
</style>
