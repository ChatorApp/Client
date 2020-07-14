<template>
    <v-app>
      <LeftBar v-if="loggedIn"></LeftBar>

      <v-app-bar app v-if="loggedIn">
        <!-- -->
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main>

        <!-- Provides the application the proper gutter -->
        <v-container :class="loggedIn ? '' : 'fill-height'" fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>

      <RightBar v-if="loggedIn"></RightBar>
    </v-app>
</template>

<script>
import LeftBar from './components/layout/LeftBar.vue';
import RightBar from './components/layout/RightBar.vue';

import api from './utils/api';

export default {
  name: 'App',
  components: {
    LeftBar,
    RightBar,
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
  background-color: var(--v-background-base)
}
.theme--dark.v-app-bar.v-toolbar.v-sheet {
  background-color: var(--v-background-darken1)
}
.theme--dark.v-navigation-drawer{
  background-color: var(--v-background-darken1)
}

</style>
