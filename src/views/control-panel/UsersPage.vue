<template>
  <div class="home">
      <el-col :span="12">
        <el-row>
          <h2>Список пользователей:</h2>
        </el-row>
        <el-row style="display: flex">
          <el-input placeholder="Имя" :maxlength="100" v-model="name"></el-input>
          <el-input placeholder="Логин" :maxlength="100" v-model="login"></el-input>
          <el-input placeholder="Пароль" :maxlength="100" v-model="password"></el-input>
          <el-button :loading="isAddingNewUser" type="primary" @click="addNewUser">
            Добавить
          </el-button>
        </el-row>
        <div v-if="isLoadingUsers">
          <Spinner />
        </div>
        <div v-else>
          <el-row v-if="!usersList">
            Список пользоваталей пуст
          </el-row>
          <el-row v-else>
            {{ usersList }}
          </el-row>
      </div>
      </el-col>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'UsersPage',
  components: {
    Spinner,
  },
  data() {
    return {
      name: undefined,
      login: undefined,
      password: undefined,
      isAddingNewUser: false,
    };
  },
  computed: {
    ...mapGetters({
      usersList: 'data/usersList',
      isLoadingUsers: 'data/isLoadingUsers',
    }),
  },
  mounted() {

  },
  methods: {
    addNewUser() {
      if (this.name
        && this.login
        && this.password
      ) {
        const params = {
          name: this.name,
          login: this.login,
          password: this.password,
        };

        this.isAddingNewUser = true;
        this.$api.cp.addNewUser(params)
          .then((response) => {
            this.isAddingNewUser = false;
            if (response.data.res) {
              this.$notify({
                title: 'Выполнено',
                message: 'Пользователь добавлен',
                type: 'success',
              });
              this.name = undefined;
              this.login = undefined;
              this.password = undefined;
              this.$store.dispatch('data/loadUsers');
            } else {
              this.$notify({
                title: 'Ошибка',
                message: 'Не удалось добавить пользователя',
                type: 'error',
              });
            }
          })
          .catch(() => {
            this.isAddingNewUser = false;
            this.$notify({
              title: 'Ошибка',
              message: 'Не удалось добавить пользователя',
              type: 'error',
            });
          });
      } else {
        this.$notify({
          title: 'Ошибка',
          message: 'Заполните все поля',
          type: 'error',
        });
      }
    },
  },
};
</script>

<style scored lang="sass">
</style>
