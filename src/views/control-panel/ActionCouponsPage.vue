<template>
  <div class="home">
      <el-col :span="24">
        <el-row>
          <h2>Купоны для акции:</h2>
        </el-row>
        <div v-if="isLoadingActionData">
          <Spinner />
        </div>
        <div v-else>
          <el-row v-if="!actionInfo">
            Информации об акции не найдено
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-row>
                <ActionItem
                  v-if="actionInfo"
                  :actionData="actionInfo"
                  :enableEdit="false"
                />
              </el-row>

              <el-row style="display: flex">
                <el-input v-model="newCouponPhone" placeholder="Телефон покупателя" style="margin-right: 6px"></el-input>
                <el-input v-model="newCouponEmail" placeholder="Почта покупателя" style="margin-right: 6px"></el-input>
                <el-button :loading="isAddingNewCoupon" type="primary" @click="addNewCoupon">Добавить купон</el-button>
              </el-row>
            </el-col>
          </el-row>

          <el-row>
            <h3>Всего купонов ({{ actionInfo.coupons && actionInfo.coupons.length }})</h3>
            <CouponsList
              :list="actionInfo.coupons"
              :isLoading="isLoadingCouponsList"
              :closeCouponApi="$api.cp.closeCoupon"
            />
          </el-row>
      </div>
      </el-col>
  </div>
</template>

<script>
// @ is an alias to /src
import Spinner from '@/components/Spinner.vue';
import ActionItem from '@/components/control-panel/ActionItem.vue';
import CouponsList from '@/components/control-panel/CouponsList.vue';

export default {
  name: 'ActionCoupons',
  components: {
    Spinner,
    ActionItem,
    CouponsList,
  },
  data() {
    return {
      actionInfo: {},
      isLoadingActionData: false,
      isLoadingCouponsList: false,
      isAddingNewCoupon: false,
      newCouponPhone: undefined,
      newCouponEmail: undefined,
    };
  },
  computed: {

  },
  mounted() {
    if (this.$route.params.id) {
      this.getActionWithCoupons(this.$route.params.id);
    }
  },
  methods: {
    addNewCoupon() {
      if (this.newCouponEmail && this.newCouponPhone) {
        const params = {
          actionId: this.$route.params.id,
          email: this.newCouponEmail,
          phone: this.newCouponPhone,
        };

        this.isAddingNewCoupon = true;
        this.$api.cp.addNewCoupon(params)
          .then((response) => {
            this.isAddingNewCoupon = false;
            if (response.data.res) {
              this.$notify({
                title: 'Выполнено',
                message: 'Купон добавлен',
                type: 'success',
              });
              this.newCouponEmail = undefined;
              this.newCouponPhone = undefined;
              this.getAllCouponsForAction();
            } else {
              this.$notify({
                title: 'Ошибка',
                message: 'Не удалось добавить купон',
                type: 'error',
              });
            }
          })
          .catch(() => {
            this.isAddingNewCoupon = false;
            this.$notify({
              title: 'Ошибка',
              message: 'Не удалось добавить купон',
              type: 'error',
            });
          });
      } else {
        this.$notify({
          title: 'Ошибка',
          message: 'Укажите почту и телефон владельца купона',
          type: 'error',
        });
      }
    },
    getActionWithCoupons(actionId) {
      this.isLoadingActionData = true;
      this.$api.cp.getActionWithCoupons(actionId)
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
        })
        .catch(() => {
          this.$notify({
            title: 'Ошибка',
            message: 'Не удалось информацию об акции с купонами',
            type: 'error',
          });
        });
      this.isLoadingActionData = false;
    },
    getAllCouponsForAction() {
      this.isLoadingCouponsList = true;
      this.$api.cp.getAllCouponsForAction(this.$route.params.id)
        .then((response) => {
          if (response.data.res) {
            this.actionInfo.coupons = response.data.payload;
            this.isLoadingCouponsList = false;
          } else {
            this.$notify({
              title: 'Ошибка',
              message: 'Не удалось получить список купонов',
              type: 'error',
            });
          }
        })
        .catch(() => {
          this.isLoadingCouponsList = false;
          this.$notify({
            title: 'Ошибка',
            message: 'Не удалось получить список купонов',
            type: 'error',
          });
        });
    },
  },
};
</script>

<style scored lang="sass">
</style>
