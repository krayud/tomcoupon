<template>
  <div class="partners-page">
    <h1>От партнерства с нами выигрывают все!</h1>
    <h2>Вы:</h2>
    <ul class="nice-list">
      <li>Получаете новых клиентов для вашего бизнеса</li>
      <li>Не тратите средства на рекламу, ведь нам проще и
        дешевле воспользоваться ей. Мы рекламируем не
        одну сферу, поэтому зайдя на сайт для покупки
        купона, к примеру, на шиномонтаж пользователь
        увидит и ваше предложение
      </li>
      <li>Платите именно за привлеченного клиента и не
        расходуете бюджет впустую</li>
      <li>Сами устанавливаете размер скидки</li>
      <li>Получаете доступ к личному кабинету с возможностью просматривать и отмечать использованные купоны</li>
      <li>Получаете <b>бесплатное размещение и оформление</b> вашей акции</li>
    </ul>
    <h2>Мы:</h2>
    <ul class="nice-list">
      <li>Имеем настроенную контекстную рекламу в поисковых системах Яндекс И Google</li>
      <li>В дальнейшем планируется продвижение во всех соц. сетях с привлечением известных блогеров</li>
      <li>Не требуем скидку 50 и более % на ваши товары и услуги, если она предоставлена вопреки качеству</li>
    </ul>
    <p>
      Таким образом, Мы получаем доход от продажи купона и только от неё, никаких комиссий за размещение и проведение акций
    </p>
    <h2>Клиент:</h2>
    <ul class="nice-list">
      <li>Получает <b>качественный</b> продукт со скидкой</li>
      <li>Удобство использования сервиса на любых устройствах</li>
      <li>Легкую покупку купона без регистрации</li>
    </ul>
    <h2>Как разместить акцию</h2>
    <p>
      Напишите нам:
    </p>
    <ul class="contact-list">
      <li><a class="link" href="https://vk.com/tomcoupon" target="_blank"><b>ВК</b></a></li>
      <li><a class="link" href="https://wa.me/+79991781808" target="_blank"><b>WhatsApp</b></a></li>
      <li><b>info@tomcoupon.ru</b></li>
    </ul>
      <p>
      В письме укажите основную информацию об акции и ваши пожелания (можете сразу приложить дополнительные ресурсы в виде картинок).<br/>
      Укажите контактные данные и мы с вами свяжемся для дальнейшего согласования.<br/><br/>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

// import PageHTML from '@/views/html/partners.html';

export default {
  name: 'PaymentInfo',
  components: {
  },
  metaInfo: {
    title: 'Томские купоны - Рекламодателям',
    meta: [
      {
        name: 'description',
        content: 'Информация для поставщиков',
      },
    ],
    link: [
      { rel: 'canonical', href: 'https://tomcoupon.ru/partners' },
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
  .partners-page
    color: $c-light-gray
    p
      line-height: 1.8
      margin: 6px 0px
    li
      line-height: 1.8
      a
        color: $c-light-gray
    .nice-list
      li
        &::marker
          content: '👍 '
    .contact-list
      li
        &::marker
          content: '💬 '
</style>
