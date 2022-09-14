<template>
  <div class="cp-base">
    <Header class="header"/>
    <div class="center-wrapper">
      <SideBar/>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/control-panel/Header.vue';
import SideBar from '@/components/control-panel/SideBar.vue';

export default {
  name: 'CPBase',
  components: {
    Header,
    SideBar,
  },
  created() {
    this.$store.dispatch('data/loadUsers');
  },
};
</script>

<style scoped lang="sass">
  .cp-base
    height: 100vh
    display: flex
    flex-direction: column
    .header
      height: 40px
      min-height: 40px
    .center-wrapper
      display: flex
      height: calc(100% - 40px)
      .content
        width: 100%
        padding: 16px
        background-color: #EDF5F8
        overflow-y: auto
</style>

<style lang="sass">
  html
    height: 100%
  body
    height: 100%
    min-height: 100%

  .tox-notification--warning
    display: none !important
</style>
