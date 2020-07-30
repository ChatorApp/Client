<template>
  <v-col class="serverBar">
    <vuescroll>
      <ServerIcon to="/dms" icon="mdi-forum" backgroundColor="indigo"></ServerIcon>
      <v-divider></v-divider>
      <ServerIcon
        v-for="server in servers"
        :key="server.id"
        :to="`/servers/${server.id}`"
        :image="server.icon"
      ></ServerIcon>
      <v-divider></v-divider>
      <CreateJoinDialog></CreateJoinDialog>
    </vuescroll>
  </v-col>
</template>

<script>
import vuescroll from 'vuescroll';
import ServerIcon from '@/components/generic/server/ServerIcon.vue';
import CreateJoinDialog from '@/components/dialogs/server/CreateJoinDialog.vue';

const api = require('@/utils/api');

export default {
  name: 'ServerBar',
  components: {
    CreateJoinDialog,
    ServerIcon,
    vuescroll,
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
  background-color: var(--v-background-darken2) !important;
}
</style>
