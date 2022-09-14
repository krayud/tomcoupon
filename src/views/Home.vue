<template>
  <div class="page-wrapper">
    <ActionsList
      :list="actionsList"
      :isLoading="isLoadingActions"
    />
  </div>
</template>

<script>
// import Header from '../components/control-panel/Header.vue';
// @ is an alias to /src
import ActionsList from '@/components/ActionsList.vue';

export default {
  name: 'Home',
  components: {
    ActionsList,
  },
  metaInfo: {
    title: 'Томские купоны - Купоны в Томске от лучших компаний с лучшими предложениями.',
    meta: [
      {
        name: 'description',
        content: `Томские купоны - это агрегатор самых лучших скидочных предложений (купоны в томске) от Томских компаний.
        У нас вы можете преобрести купон на скидку просто, быстро и без регистрации`,
      },
    ],
    link: [
      { rel: 'canonical', href: 'https://tomcoupon.ru' },
    ],
  },
  data() {
    return {
      isLoadingActions: false,
      actionsList: null,
      currentCategory: undefined,
    };
  },
  created() {
    this.applyCategoryFromUrlAndGetActions();
  },
  methods: {
    applyCategoryFromUrlAndGetActions() {
      this.currentCategory = this.$route.params.categoryUrl;
      this.getActualActions();
    },
    getActualActions() {
      this.isLoadingActions = true;
      this.$api.action.getActualActions(this.currentCategory)
        .then(({ data }) => {
          if (data.res) {
            this.actionsList = data.payload;
          } else if (this.currentCategory) {
            this.$router.replace({ name: 'Home' });
          } else {
            this.$notify({
              title: 'Ошибка',
              message: 'Не удалось получить список акций',
              type: 'error',
            });
          }
          this.isLoadingActions = false;
        })
        .catch(() => {
          this.$notify({
            title: 'Ошибка',
            message: 'Не удалось получить список акций',
            type: 'error',
          });
        });
    },
  },
  watch: {
    $route() {
      this.applyCategoryFromUrlAndGetActions();
    },
  },
};
</script>

<style scoped lang="sass">
  @import "@/assets/css/colors"

  .page-title
    text-align: center
    text-transform: uppercase
    font-size: 16px
    margin: 20px 10px
    color: $c-dark-gray
  .page-wrapper
    h1
      text-align: center
      margin: 0.5em 0px
      color: $c-light-gray
      //text-transform: uppercase
      //font-size: 1.6rem
</style>
