<template>
  <div class="page-wrapper">
    <div v-if="isLoadingAction" class="spinner-container">
      <Spinner/>
    </div>
    <div v-if="!isLoadingAction && actionData">
      <h1>Подробная информация о купоне:</h1>
      <div style="display: flex; justify-content: center">
        <ActionCard
          :actionData="actionData"
          disableButton
        />
      </div>
      <br/>
      <div>
        <form ref="paymentForm" accept-charset="utf-8" style="display: none" method="post" target="_blank" action="https://merchant.intellectmoney.ru/ru/">
          <input type="text" name="eshopId" :value="paymentData.eshopId">
          <input type="text" name="orderId" :value="paymentData.orderId">
          <input type="text" name="serviceName" :value="paymentData.serviceName">
          <input type="text" name="recipientAmount" :value="paymentData.recipientAmount">
          <input type="text" name="recipientCurrency" :value="paymentData.recipientCurrency">
          <input type="text" name="UserField_1" :value="paymentData.userPhone">
          <input type="text" name="UserField_2" :value="paymentData.actionId">
          <input type="text" name="hash" :value="paymentData.hash">
        </form>
        <div class="button-notification">
          <el-button v-if="!isPaymentDataReceived" class="go-pay-button" type="primary" round
             :loading="isLoadingPaymentData"
             @click="getPaymentData"
          >Хочу купон!</el-button>
          <el-input v-if="isPaymentDataReceived" style="width: 300px" placeholder="Номер телефона (без +7 и 8)"
            v-model="userPhoneFormated"
            v-mask="'+7-###-###-##-##'"
            @input="rawPhoneNumber"
            @change="rawPhoneNumber"
          /><br/><br/>
          <el-button v-if="isPaymentDataReceived" class="go-pay-button" type="primary" round
             :loading="isLoadingPaymentData"
             @click="goPayment"
          >Перейти к оплате</el-button>
          <br/><br/>
          <el-alert
            title="Код купона будет отправлен на указанный номер телефона сразу после оплаты"
            type="warning"
            :closable="false">
          </el-alert>
        </div>
        <div v-html="actionData.text" class="action-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import Header from '../components/control-panel/Header.vue';
// @ is an alias to /src
import { mask } from 'vue-the-mask';
import ActionCard from '@/components/ActionCard.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'ActionInfo',
  components: {
    ActionCard,
    Spinner,
  },
  directives: {
    mask,
  },
  metaInfo: {
    title: 'Томские купоны - Информация о купоне',
    meta: [
      {
        name: 'description',
        content: `Томские купоны - это агрегатор самых лучших скидочных предложений от Томских компаний.
        У нас вы можете преобрести купон на скидку просто, быстро и без регистрации`,
      },
    ],
    link: [
      { rel: 'canonical', href: 'https://tomcoupon.ru/action' },
    ],
  },
  data() {
    return {
      isLoadingAction: false,
      isLoadingPaymentData: false,
      isPaymentDataReceived: false,
      actionData: null,
      userPhoneFormated: '',
      paymentData: {
        eshopId: undefined,
        orderId: undefined,
        actionId: undefined,
        serviceName: undefined,
        recipientAmount: undefined,
        recipientCurrency: undefined,
        userPhone: undefined,
        hash: undefined,
      },
    };
  },
  created() {
    this.getActionById();
  },
  methods: {
    rawPhoneNumber() {
      if (this.userPhoneFormated) {
        this.paymentData.userPhone = this.userPhoneFormated.replaceAll('-', '').replace('+7', '').replace('+', '');
      }
    },
    getPaymentData() {
      // this.$notify({
      //   title: 'Примечание',
      //   message: 'В данный момент подключается сервис оплаты',
      //   type: 'warning',
      // });
      this.isLoadingPaymentData = true;
      this.$api.action.getPaymentData(this.$route.params.id)
        .then(({ data }) => {
          this.isLoadingPaymentData = false;
          if (!data.res) {
            this.$notify.error({
              title: 'Ошибка покупки',
              message: 'Невозможно произвести оплату. Возможно, акция не актуальна.',
            });
            this.isLoadingPaymentData = false;
            return;
          }
          if (data.payload) {
            this.paymentData = data.payload;
            this.isPaymentDataReceived = true;
          }
        })
        .catch(() => {
          this.isLoadingPaymentData = false;
          this.$notify.error({
            title: 'Ошибка сети',
            message: 'Не удалось получить ссылку для оплаты',
          });
        });
    },
    goPayment() {
      if (this.paymentData.userPhone && this.paymentData.userPhone.length === 10) {
        this.$refs.paymentForm.submit();
      } else {
        this.$notify.error({
          title: 'Ошибка данных',
          message: 'Введите корректный номер телефона',
        });
      }
    },
    getActionById() {
      this.isLoadingAction = true;
      this.$api.action.getActionById(this.$route.params.id)
        .then(({ data }) => {
          if (data.res && data.payload) {
            this.actionData = data.payload;
          } else {
            this.$notify({
              title: 'Ошибка',
              message: 'Не удалось получить данные об акции',
              type: 'error',
            });
          }
          this.isLoadingAction = false;
        })
        .catch(() => {
          this.isLoadingAction = false;
          this.$notify({
            title: 'Ошибка',
            message: 'Не удалось получить данные об акции',
            type: 'error',
          });
        });
    },
  },
  watch: {
    // $route() {
    //   this.getActionById();
    // },
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
    .spinner-container
      text-align: center
    h1
      text-align: center
      margin: 0.5em 0px
      color: $c-light-gray
      //text-transform: uppercase
      //font-size: 1.6rem

  .button-notification
    text-align: center
    p
      color: #c36918
    .go-pay-button
      text-transform: uppercase
      background-color: $c-purple
      border: 1px solid $c-purple
      &:hover
        background-color: darken($c-purple, 10%)

  .action-content
    color: $c-light-gray
</style>
