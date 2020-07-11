<template>
    <v-app>
      <LeftBar></LeftBar>

      <v-app-bar app>
        <!-- -->
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main>

        <!-- Provides the application the proper gutter -->
        <v-container fluid>

          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>

      <RightBar></RightBar>
    </v-app>
</template>

<script>
import LeftBar from './components/layout/LeftBar.vue';
import RightBar from './components/layout/RightBar.vue';

export default {
  name: 'App',
  components: {
    LeftBar,
    RightBar,
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
