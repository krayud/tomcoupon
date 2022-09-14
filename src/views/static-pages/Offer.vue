<template>
  <div class="offer-page" v-html="pageText"></div>
</template>

<script>
// @ is an alias to /src
import PageHTML from '@/views/html/offer.html';

export default {
  name: 'Agreement',
  components: {
  },
  metaInfo: {
    title: 'Томские купоны - Публичная оферта',
    meta: [
      {
        name: 'description',
        content: 'Публичная оферта',
      },
    ],
    link: [
      { rel: 'canonical', href: 'https://tomcoupon.ru/offer' },
    ],
  },
  data() {
    return {
      pageText: PageHTML,
    };
  },
};
</script>

<style scoped lang="sass">
  @import "@/assets/css/colors";
  .offer-page
    color: $c-light-gray
    p
      line-height: 1.8
      margin: 6px 0px
</style>
