<template>
  <div class="login-form-wrapper">
    <LoginForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
};
</script>

<style scoped lang="sass">
  .login-form-wrapper
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
</style>
