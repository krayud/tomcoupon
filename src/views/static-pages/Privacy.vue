<template>
  <div class="privacy-info" v-html="pageText"></div>
</template>

<script>
// @ is an alias to /src
import PageHTML from '@/views/html/privacy.html';

export default {
  name: 'Privacy',
  components: {
  },
  data() {
    return {
      pageText: PageHTML,
    };
  },
  metaInfo: {
    title: 'Томские купоны - Политика конфиденциальности',
    meta: [
      {
        name: 'description',
        content: 'Политика конфиденциальности',
      },
    ],
    link: [
      { rel: 'canonical', href: 'https://tomcoupon.ru/privacy' },
    ],
  },
};
</script>

<style scoped lang="sass">
  @import "@/assets/css/colors";
  .privacy-info
    color: $c-light-gray
    p
      line-height: 1.8
      margin: 6px 0px

</style>
