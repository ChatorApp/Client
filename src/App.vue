<template>
  <v-app>
    <v-row no-gutters>
      <ServerBar v-if="loggedIn"></ServerBar>
      <v-main>
        <router-view></router-view>
      </v-main>
      <UserListPanel v-if="loggedIn"></UserListPanel>
    </v-row>
  </v-app>
</template>

<script>
import ServerBar from './components/layout/ServerBar.vue';
import UserListPanel from './components/layout/UserListPanel.vue';

import api from './utils/api';

export default {
  name: 'App',
  components: {
    ServerBar,
    UserListPanel,
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  async mounted() {
    await this.verify();
  },
  methods: {
    async verify() {
      try {
        const verifyRequest = await api.get('/auth/verify');
        this.loggedIn = verifyRequest.data.loggedIn;
      } catch (e) {
        this.loggedIn = false;
      }
    },
  },
};
</script>

<style scoped>
.theme--dark.v-application {
  background-color: var(--v-background-lighten1);
}
.theme--dark.v-app-bar.v-toolbar.v-sheet {
  background-color: var(--v-background-base);
}
.theme--dark.v-navigation-drawer {
  background-color: var(--v-background-base);
}
.fill-height {
  height: 50vw;
}
</style>
