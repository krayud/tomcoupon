<template>
  <div class="payment-fail-text">
    <h1>Оплата не состоялась.</h1>
    <p>Свяжитесь с нами для решения возникшей ситуации.</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'PaymentFail',
  components: {
  },
  metaInfo: {
    title: 'Томские купоны - Оплата не прошла',
  },
};
</script>

<style scoped lang="sass">
  @import "@/assets/css/colors";
  .payment-fail-text
    color: $c-light-gray
</style>
