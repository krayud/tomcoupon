<template>
  <div>
    <div v-if="isLoading" class="spinner-container">
      <Spinner/>
    </div>
    <div v-else>
      <div v-if="list && list.length > 0" class="couponss-list">
        <CouponItem v-for="(coupon, index) in list" :key="index"
          :couponData="coupon"
          @closeCoupon="closeCoupon"
        />
      </div>
      <div v-if="list && list.length == 0" class="empty-coupons"><h3>Список купонов пуст</h3></div>
    </div>
  </div>
</template>

<script>
import CouponItem from '@/components/control-panel/CouponItem.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'CouponsList',
  components: {
    CouponItem,
    Spinner,
  },
  props: {
    closeCouponApi: {
      type: Function,
      default: () => {},
    },
    list: {
      type: Array,
      default: () => null,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {

    };
  },
  methods: {
    closeCoupon(coupon) {
      if (coupon.isActive) {
        this.closeCouponApi({ id: coupon.id })
          .then((response) => {
            if (response.data.res) {
              this.$notify({
                title: 'Выполнено',
                message: 'Купон успешно закрыт',
                type: 'success',
              });
              // eslint-disable-next-line no-param-reassign
              coupon.isActive = false;
              // eslint-disable-next-line no-param-reassign
              coupon.closedDate = response.data.payload.closedDate;
            } else {
              this.$notify({
                title: 'Ошибка',
                message: 'Не удалось закрыть купон',
                type: 'error',
              });
            }
          })
          .catch(() => {
            this.$notify({
              title: 'Ошибка',
              message: 'Не удалось закрыть купон',
              type: 'error',
            });
          });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import "@/assets/css/colors";
  @import "@/assets/css/res-container";

  .spinner-container
    text-align: center
  .empty-coupons
    color: $c-light-gray

  .couponss-list
    display: flex
    flex-wrap: wrap

</style>
