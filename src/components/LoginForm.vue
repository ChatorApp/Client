<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-alert type="error" v-if="error !== null">{{ error }}</v-alert>
      <v-card class="elevation-12">
        <v-form @submit.prevent="login">
          <v-toolbar dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              label="Login"
              name="login"
              prepend-icon="mdi-account"
              type="text"
              v-model="email"
            ></v-text-field>

            <v-text-field
              id="password"
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit">Login</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import api from '@/utils/api';

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    login() {
      const vm = this;
      api
        .post('/auth/login', { email: this.email, password: this.password })
        .then((response) => {
          localStorage.setItem(
            'api_key',
            JSON.stringify({
              expiry: Date.now() + 1000 * 60 * 60 * 24,
              key: response.data.token,
            }),
          );
          this.$router.go(0);
        })
        .catch((error) => {
          if (error.response) {
            vm.error = error.response.data.message;
          }
        });
    },
  },
};
</script>
