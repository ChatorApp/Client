<template>
  <v-col class="serverBar">
    <v-list class="serverBar">
      <v-list-item v-for="server in servers" :key="server.id" :to="`/servers/${server.id}`">
        <v-list-item-avatar>
          <img :src="server.icon" />
        </v-list-item-avatar>
      </v-list-item>
      <v-divider></v-divider>
      <CreateJoinModal></CreateJoinModal>
    </v-list>
  </v-col>
</template>

<script>
import CreateJoinModal from '../servers/CreateJoinModal.vue';

const api = require('@/utils/api');

export default {
  name: 'ServerBar',
  components: {
    CreateJoinModal,
  },
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
<style scoped>
.serverBar {
  max-width: 72px;
  height: 100vh;
  background-color: black !important;
}
</style>
