<template>
  <div class="about-page">
    <h1>Информация о нас</h1>
    <h2>Нашей целью является не заработать на продажах купонов, а изменить отношение к ним.</h2>
    <p>
      Наша команда является активными пользователями купонов на скидки.
      Поэтому при создание сервиса хотели реализовать то, чего нам не хватало, и что нас не устраивало на других сайтах с купонами в Томске:
    </p>
    <ul>
      <li>Обязательная регистрация (пароль постоянно терялся, приходилось регистрировать новый аккаунт).</li>
      <li>Множество условий по акции, которые необходимо выполнить, чтобы воспользоваться скидкой.</li>
      <li>Качество продукции компаний которые рекламируются на купонах.</li>
    </ul>
    <p>
      Поэтому главной задачей для нас была реализация тезиса: <b>“Нажал-Купил”</b>, с которой мы прекрасно справились.
      От захода на сайт до покупки купона требуется не более минуты.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
// import PageHTML from '@/views/html/about.html';

export default {
  name: 'About',
  components: {
  },
  data() {
    return {
      // pageText: PageHTML,
    };
  },
  metaInfo: {
    title: 'Томские купоны - О нас',
    meta: [
      {
        name: 'description',
        content: 'Информация о нас',
      },
    ],
    link: [
      { rel: 'canonical', href: 'https://tomcoupon.ru/about' },
    ],
  },
};
</script>

<style scoped lang="sass">
  @import "@/assets/css/colors";
  .about-page
    color: $c-light-gray
    p
      line-height: 1.8
      margin: 16px 0px

    li
      line-height: 1.8
      &::marker
        content: '👎 '
</style>
