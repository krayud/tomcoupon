<template>
  <div class="content">
    <h1>Акция:</h1>
    <ActionItem
      :actionData="actionInfo"
      :isLoading="isLoadingActionData"
    />
    <h1>Купоны:</h1>
    <CouponsList
      :list="actionInfo && actionInfo.coupons || []"
      :isLoading="isLoadingActionData"
      :closeCouponApi="$api.office.closeCoupon"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ActionItem from '@/components/office/ActionItem.vue';
import CouponsList from '@/components/control-panel/CouponsList.vue';

export default {
  name: 'OfficeAction',
  components: {
    ActionItem,
    CouponsList,
  },
  mounted() {
    if (this.$route.params.id) {
      this.getActionWithCoupons(this.$route.params.id);
    }
  },
  data() {
    return {
      isLoadingActionData: false,
      actionInfo: undefined,
    };
  },
  methods: {
    getActionWithCoupons(actionId) {
      this.isLoadingActionData = true;
      this.$api.office.getMyActionCoupons(actionId)
        .then((response) => {
          if (response.data.res && response.data.payload) {
            this.actionInfo = response.data.payload;
          } else {
            this.$notify({
              title: 'Ошибка',
              message: 'Не удалось информацию об акции с купонами',
              type: 'error',
            });
          }
          this.isLoadingActionData = false;
        })
        .catch(() => {
          this.isLoadingActionData = false;
          this.$notify({
            title: 'Ошибка',
            message: 'Не удалось информацию об акции с купонами',
            type: 'error',
          });
        });
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
