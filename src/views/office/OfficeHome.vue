<template>
  <div class="content">
    <h1>Мои акции:</h1>
    <ActionsList
      :list="actionsList"
      :loading="isLoadingActions"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ActionsList from '@/components/office/ActionsList.vue';

export default {
  name: 'OfficeHome',
  components: {
    ActionsList,
  },
  created() {
    this.getAllMyActions();
  },
  data() {
    return {
      isLoadingActions: false,
      actionsList: undefined,
    };
  },
  methods: {
    getAllMyActions() {
      this.isLoadingActions = true;
      this.$api.office.getAllMyActions()
        .then((response) => {
          this.isAddingNewCoupon = false;
          if (response.data.res) {
            this.actionsList = response.data.payload;
          } else {
            this.$notify({
              title: 'Ошибка',
              message: 'Не удалось получить список ваших акций',
              type: 'error',
            });
          }
        })
        .catch(() => {
          this.$notify({
            title: 'Ошибка',
            message: 'Не удалось получить список ваших акций',
            type: 'error',
          });
        });
      this.isLoadingActions = false;
    },
  },
};
</script>

<style scoped lang="sass">
  @import "@/assets/css/colors"
  .content
    padding: 10px
    h1
      color: $c-light-gray
</style>
