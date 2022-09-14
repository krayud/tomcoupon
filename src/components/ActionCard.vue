<template>
  <div>
    <div class="action-card">
      <div class="action-card__description">
        <h2 class="action-card__title">{{ actionData.title }}</h2>
        <div class="action-card__button-container">
          <div class="additional-info">Действует до <b>{{ endDateFormatted }}</b></div>
          <div class="additional-info">Продано: <b>{{ actionData.soldCoupons }}</b></div>
          <router-link v-if="!disableButton" :to="{ name: 'ActionInfo', params: { id: actionData.id } }">
            <el-button class="more-button" type="primary" round>
             Скидка {{ actionData.discount }}% = {{ actionData.price }}&#8381;
            </el-button>
          </router-link>
        </div>
      </div>
      <div class="action-card__image">
        <div class="action-card__dashed-border"></div>
        <img v-if="actionData.logo" :src="actionData.logo"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ActionCard',
  props: {
    actionData: {
      type: Object,
      default: () => ({
        title: '',
        logo: undefined,
        startDate: '',
        endDate: '',
        text: '',
        soldCoupons: 0,
      }),
    },
    disableButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    endDateFormatted() {
      return this.actionData.endDate.split('-').reverse().join('.') || '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import '@/assets/css/breakpoints'
  @import "@/assets/css/colors";

  .action-card
    width: 500px
    height: 250px
    background-color: white
    border-radius: 25px
    display: flex
    justify-content: space-between
    position: relative
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25))
    &__description
      width: 250px
      height: 100%
      display: flex
      flex-direction: column
      justify-content: space-between
    &__button-container
      text-align: center
      padding: 10px 0px
      .more-button
        width: 180px
        background-color: $c-purple
        border: 1px solid $c-purple
        &:hover
          background-color: darken($c-purple, 10%)
      .additional-info
        font-size: 12px
        color: $c-light-gray
        margin: 5px 0px
    &__dashed-border
      position: absolute
      border-right: 4px dashed black
      background-color: white
      mix-blend-mode: screen;
      height: 240px
    &__image
      width: 250px
      height: 100%
      display: flex
      align-items: center
      & img
        width: 100%
        height: 100%
        object-fit: cover
        border-top-right-radius: 25px
        border-bottom-right-radius: 25px
    &__title
      overflow: hidden
      margin: 0px
      padding: 20px
      font-size: 20px
      font-weight: normal
    @media (max-width: 767px), (min-width: 992px) and (max-width: 1199px)
      width: 250px
      height: 500px
      flex-direction: column
      flex-flow: column-reverse
      &__description
        height: 250px
      &__dashed-border
        border-top: 4px dashed black
        background-color: white
        mix-blend-mode: screen;
        height: 0px
        width: 240px
      &__image
        flex-flow: column-reverse
        height: 250px
        & img
          border-top-left-radius: 25px
          border-top-right-radius: 25px
          border-bottom-left-radius: 0px
          border-bottom-right-radius: 0px

</style>
