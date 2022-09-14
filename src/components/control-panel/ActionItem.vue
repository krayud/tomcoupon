<template>
  <div class="action-item">
    <div class="action-item__left">
      <div class="action-item__logo"><img :src="actionData.logo"/></div>
      <div>
        <div class="action-item__additional-info" v-if="actionData.category">
          {{ `${actionData.category.title} |
          ${actionData.startDate} - ${actionData.endDate}` }}
        </div>
        <div class="action-item__title">{{ actionData.title }}</div>
      </div>
    </div>
    <div class="action-item__right" v-if="enableEdit">
      <el-switch
        :value="actionData.isActive"
        active-color="#13ce66"
        @change="switchActionActive"
        >
      </el-switch>
      <div class="action-item__button">
        <router-link :to="{ name: 'ActionCoupons', params: { id: actionData.id } }">
          Купоны
        </router-link>
      </div>
      <div class="action-item__button">
        <router-link :to="{ name: 'ActionEdit', params: { id: actionData.id } }">
          Редактор
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActionItem',
  props: {
    actionData: {
      type: Object,
      default: () => {},
    },
    enableEdit: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    switchActionActive() {
      this.$api.cp.switchActionActive({ id: this.actionData.id, currentValue: this.actionData.isActive })
        .then((response) => {
          if (response.data.res) {
            this.$notify({
              title: 'Выполнено',
              message: 'Состояние акции обновлено',
              type: 'success',
            });
            this.actionData.isActive = response.data.payload.isActive;
          } else {
            this.$notify({
              title: 'Ошибка',
              message: 'Не удалось обновить сотояние акции',
              type: 'error',
            });
          }
        })
        .catch(() => {
          this.$notify({
            title: 'Ошибка',
            message: 'Не удалось обновить сотояние акции',
            type: 'error',
          });
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import "@/assets/css/colors";
  .action-item
    display: flex
    justify-content: space-between
    background-color: white
    padding: 10px
    border-radius: 5px
    &:hover
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15)
    &__logo
      width: 100px
      max-height: 100px
      margin-right: 10px
      img
        max-width: 100px
        max-height: 100px
    &__left
      display: flex
    &__additional-info
      font-size: 12px
    &__right
      display: flex
      flex-direction: column
      align-items: flex-end
    &__button
      margin-top: 12px
      cursor: pointer
      a
        color: $c-dark-gray
        text-decoration: none
        &:hover
          color: $c-yellow
</style>
