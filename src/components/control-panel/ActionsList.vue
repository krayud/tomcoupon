<template>
  <div class="actions-list" v-loading="loading">
    <div v-if="!loading">
      <div v-if="list.length === 0">Список пуст</div>
      <ActionItem v-for="(action, index) in list" :key="index"
        class="action-item"
        :actionData="action"
      />
    </div>
  </div>
</template>

<script>
import ActionItem from './ActionItem.vue';

export default {
  name: 'ActionsList',
  components: {
    ActionItem,
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
  .action-item
    margin-bottom: 10px
    &:last-child
      margin-bottom: 0
</style>
