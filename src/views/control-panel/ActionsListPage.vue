<template>
  <div class="home" style="height: 100%">
    <el-row>
      <el-col :span="12">
        <el-row><h2>Список акций</h2></el-row>
        <el-row>
          <ActionsList
          :list='actionsList'
          :loading='isLoadingList'
          />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import ActionsList from '@/components/control-panel/ActionsList.vue';

export default {
  name: 'ActionsListPage',
  components: {
    ActionsList,
  },
  data() {
    return {
      actionsList: [],
      isLoadingList: false,
    };
  },
  computed: {
    ...mapGetters({
      catsList: 'data/catList',
      isLoadingCats: 'data/isLoadingCategories',
    }),
  },
  mounted() {
    this.getAllActions();
  },
  methods: {
    getAllActions() {
      this.isLoadingList = true;
      this.$api.cp.getAllActions()
        .then((response) => {
          this.isLoadingList = false;
          if (response.data.res) {
            this.actionsList = response.data.payload;
          } else {
            this.$notify({
              title: 'Ошибка',
              message: 'При получении списка акций',
              type: 'error',
            });
          }
        })
        .catch(() => {
          this.isLoadingList = false;
          this.$notify({
            title: 'Ошибка',
            message: 'При получении списка акций',
            type: 'error',
          });
        });
    },
  },
};
</script>

<style scored lang="sass">
</style>
