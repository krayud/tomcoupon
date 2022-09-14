<template>
  <div class="actions-list">
    <div v-if="loading" class="actions-list__spinner-container"><Spinner/></div>
    <div v-else>
      <div v-if="list.length === 0">Список пуст</div>
      <ActionItem v-for="(action, index) in list" :key="index"
        class="action-item-wrapper"
        :actionData="action"
      />
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
import ActionItem from './ActionItem.vue';

export default {
  name: 'ActionsList',
  components: {
    ActionItem,
    Spinner,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .actions-list
    &__spinner-container
      text-align: center
  .action-item-wrapper
    margin-bottom: 10px
    &:last-child
      margin-bottom: 0
</style>
