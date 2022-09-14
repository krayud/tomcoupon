<template>
  <div class="coupon-item">
    <div style="display: flex; justify-content: space-between">
      <div>{{ couponData.number }}</div>
      <el-switch
        slot="reference"
        :value="couponData.isActive"
        :disabled="!couponData.isActive"
        active-color="#13ce66"
        @change="closeCouponhandler"
      >
      </el-switch>
    </div>
    <div style="font-size: 10px">Создан: {{ getCreatedDate }} <br/> Закрыт: {{ getClosedDate }}</div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'CouponItem',
  comments: {
    moment,
  },
  props: {
    couponData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    closeCouponhandler() {
      this.$emit('closeCoupon', this.couponData);
    },
  },
  computed: {
    getCreatedDate() {
      return moment(parseInt(this.couponData.createdDate, 10)).format('DD:MM:yyyy hh:mm:ss');
    },
    getClosedDate() {
      if (this.couponData.closedDate) {
        return moment(parseInt(this.couponData.closedDate, 10)).format('DD:MM:yyyy hh:mm:ss');
      }
      return '-';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import "@/assets/css/colors"
  @import '@/assets/css/breakpoints'

  .coupon-item
    width: 200px
    background-color: $c-white
    padding: 6px
    border-radius: 4px
    margin: 5px
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.15))
    @media ($vsmall)
      width: 100%
</style>
