<template>
  <div class="payment-info">
    <h1>Порядок покупки купона</h1>
    <ul>
      <li>Перейдите на страницу купона, нажав кнопку на его карточке</li>
      <li>Ознакомьтесь с предлагаемыми условиями</li>
      <li>Нажмите на кнопку <b>"Хочу купон!"</b></li>
      <li>Введите номер телефона, на который хотите получить купон и нажмите кнопку <b>"Перейти к оплате"</b></li>
    </ul>
    <p>
      После нажатия на кнопку, вы будете перенаправлены на сайт платежной системы.
      Выберите удобный для вас способ оплаты и произведите оплату. После успешной оплаты,
      код купона будет выслан вам в СМС сообщении.
      <br/>
      Чтобы получить скидку,
      предъявите номер купона при заказе соответствующей услуги или товара.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
// import PageHTML from '@/views/html/payment.html';

export default {
  name: 'PaymentInfo',
  components: {
  },
  data() {
    return {
      // pageText: PageHTML,
    };
  },
  metaInfo: {
    title: 'Томские купоны - Как купить купон',
    meta: [
      {
        name: 'description',
        content: 'Подробная инструкция о том, как приобрести купон',
      },
    ],
    link: [
      { rel: 'canonical', href: 'https://tomcoupon.ru/payment-info' },
    ],
  },
};
</script>

<style scoped lang="sass">
  @import "@/assets/css/colors";
  .payment-info
    color: $c-light-gray
    p
      line-height: 1.8
      margin: 16px 0px

    li
      line-height: 1.8
      &::marker
        content: '👉 '

</style>
