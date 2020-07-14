<template>
  <v-navigation-drawer app :mini-variant="true" left>
    <v-list dense nav class="py-0">
      <v-list-item v-for="server in servers" :key="server.id"
      class="px-0" :to="`/servers/${server.id}`">
        <v-list-item-avatar>
          <img :src="server.icon" />
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
const api = require('@/utils/api');

export default {
  name: 'LeftBar',
  data() {
    return {
      servers: [],
    };
  },
  async mounted() {
    const vm = this;
    api.get('/servers/me').then((response) => {
      vm.servers = response.data;
    });
  },
};
</script>
