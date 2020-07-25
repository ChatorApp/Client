<template>
  <v-container class="fill-height" fluid>
    <LoginForm></LoginForm>
  </v-container>
</template>
<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
};
</script>
