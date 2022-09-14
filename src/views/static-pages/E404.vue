<template>
  <div class="e404">
    <h1>Такой страницы не существует ;(</h1>
    <router-link :to="{ name: 'Home' }">Вернуться на главную</router-link>
  </div>
</template>
<style scoped lang="sass">
  @import "@/assets/css/colors";
  .e404
    height: 100vh
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    color: $c-light-gray
    a
      color: $c-light-gray
      text-decoration: none
      font-weight: bold
      text-transform: uppercase
      &:hover
        color: $c-yellow
</style>
