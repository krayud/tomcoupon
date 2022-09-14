<template>
  <div class="payment-success-text">
    <h1>Оплата прошла успешно.</h1>
    <p>Мы выслали код купона на указанный вами номер телефона. Спасибо за покупку!</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'PaymentSuccess',
  components: {
  },
  metaInfo: {
    title: 'Томские купоны - Успешная оплата',
  },
};
</script>

<style scoped lang="sass">
  @import "@/assets/css/colors";
  .payment-success-text
    color: $c-light-gray
</style>
