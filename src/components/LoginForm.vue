<template>
  <div class="login-form-container">
    <form ref="loginform">
      <el-row class="logo-container">
        <img style="width: 100%" src="@/assets/imgs/logo.svg"/>
      </el-row>
      <el-row>
         <el-input name="username" placeholder="Логин" v-model="login"></el-input>
      </el-row>
      <el-row>
         <el-input name="password" placeholder="Пароль" v-model="password" show-password></el-input>
      </el-row>
      <el-row>
         <el-button class="login-button"
            :loading="isLoginProcess"
            type="primary"
            @click="tryLogin">Войти
          </el-button>
      </el-row>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LoginForm',
  props: {
  },
  components: {
  },
  data() {
    return {
      isLoading: false,
      login: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters({
      isLoginProcess: 'user/isLoginProcess',
    }),
  },
  methods: {
    tryLogin() {
      if (this.login.length > 0 && this.password.length > 0) {
        this.$store.dispatch('user/startLogin');
        this.$api.auth.login({ login: this.login, password: this.password })
          .then(({ data }) => {
            if (data.res) {
              this.$store.dispatch('user/setUserData', { payload: data.payload, router: this.$router });
            }
          })
          .catch(() => {
            this.$notify.error({
              title: 'Ошибка',
              message: 'Не удалось войти, проверьте данные',
            });
            this.$store.dispatch('user/endLogin');
          });
      } else {
        this.$notify.error({
          title: 'Ошибка',
          message: 'Заполните все поля',
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import "@/assets/css/colors"

  .login-form-container
    width: 300px
    padding: 20px
    background-color: white
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15)
    border-radius: 5px
    .logo-container
      color: lighten($c-dark-gray, 20%)
      text-align: center
    .login-button
      width: 100%
  .el-row
    margin-bottom: 20px
    &:last-child
      margin-bottom: 0
</style>
