<template>
  <div class="return-info">
    <h1>Возврат денежных средств</h1>
    <p>
      Вы можете вернуть купон в течении суток после покупки.
      Для поиска «потерянных купонов», замены купона, и для решения любой
      проблемы с купоном нам нужна дополнительная информация.<br/>
      Только после ее получения мы начинаем искать Ваш платеж, решать «проблему»:<br/>
    </p>
    <ul>
      <li>Кратко опишите проблемную ситуацию</li>
      <li>Дата платежа (примерное время платежа)</li>
      <li>Сумма платежа</li>
    </ul>
    <p>
    Все эти данные необходимо выслать на почту <b>info@tomcoupon.ru</b> с пометкой <b>«Не получил купон»</b>.<br/>
    Поиск происходит в течение трех рабочих дней.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

// import PageHTML from '@/views/html/return.html';

export default {
  name: 'ReturnInfo',
  components: {
  },
  metaInfo: {
    title: 'Томские купоны - Правила возврата',
    meta: [
      {
        name: 'description',
        content: 'Подробная инструкция о том, как вернуть купон',
      },
    ],
    link: [
      { rel: 'canonical', href: 'https://tomcoupon.ru/return-info' },
    ],
  },
  data() {
    return {
      // pageText: PageHTML,
    };
  },
};
</script>

<style scoped lang="sass">
  @import "@/assets/css/colors";
  .return-info
    color: $c-light-gray
    p
      line-height: 1.8
      margin: 16px 0px

    li
      line-height: 1.8
      &::marker
        content: '👉 '

</style>
