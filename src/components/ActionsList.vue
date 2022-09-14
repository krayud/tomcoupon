<template>
  <div>
    <div v-if="isLoading" class="spinner-container">
      <Spinner/>
    </div>
    <div v-else>
      <div v-if="list && list.length > 0" class="actions-list">
        <ActionCard v-for="(action, index) in list" :key="index"
          :actionData="action"
        />
      </div>
      <div v-if="list && list.length == 0" class="empty-actions"><h3>По заданным параметрам акций не найдено.</h3></div>
    </div>
  </div>
</template>

<script>
import ActionCard from '@/components/ActionCard.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'ActionsList',
  components: {
    ActionCard,
    Spinner,
  },
  props: {
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import "@/assets/css/colors";
  @import "@/assets/css/res-container";

  .spinner-container
    text-align: center
  .empty-actions
    color: $c-light-gray
  .actions-list
    margin: 20px 0px
    background-color: $c-light-blue
    display: grid
    justify-content: center
    grid-template-columns: repeat(2, 500px);
    grid-column-gap: 40px
    grid-row-gap: 40px
    @media ($large)
      grid-template-columns: repeat(3, 250px);
    @media ($medium)
      grid-template-columns: repeat(1, 500px);
    @media ($small)
      grid-template-columns: repeat(2, 250px);
      grid-column-gap: 20px
      grid-row-gap: 20px
    @media ($vsmall)
        grid-template-columns: repeat(1, 250px);
</style>
