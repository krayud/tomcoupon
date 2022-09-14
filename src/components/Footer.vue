<template>
  <div class="res-container">
    <div class="footer-content">
      <div class="information-links">
        <router-link :to="{ name: 'OfferInfo' }">Оферта</router-link>
        <router-link :to="{ name: 'PrivacyInfo' }">Политика конфиденциальности</router-link>
        <router-link :to="{ name: 'PaymentInfo' }">Порядок оплаты</router-link>
        <router-link :to="{ name: 'ReturnInfo' }">Возврат</router-link>
        <router-link :to="{ name: 'Partners' }">Партнёрам</router-link>
      </div>
      <div class="contacts">
        <a href="https://vk.com/tomcoupon" target="_blank">Группа ВК</a>
        | info@tomcoupon.ru | WhatsApp: +79991781808 | ОГРНИП: xxxxxxxxx
      </div>
      <br/>
      &copy; tomcoupon.ru 2021
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
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
  @import "@/assets/css/colors"
  @import "@/assets/css/res-container"

  .footer-content
    padding: 10px
    text-align: center
    justify-items: center
    color: $c-white
    font-size: 14px
    .information-links
      display: flex
      justify-content: center
      flex-wrap: wrap
      a
        margin: 0px 5px
        text-decoration: none
        color: $c-white
        &:hover
          color: $c-yellow
      @media ($vsmall)
        flex-direction: column
        a
          margin: 3px 0px
    .contacts
      margin-top: 10px
      color: $c-white
      a
        color: $c-white
        &:hover
          text-decoration: none
</style>
