<template>
  <div>
    <ServerChannelsBar :Name="server.name" :Categories="server.categories"></ServerChannelsBar>
  </div>
</template>

<script>
import ServerChannelsBar from '../components/servers/ServerChannelsBar.vue';

import api from '../utils/api';

export default {
  name: 'Server',
  data: () => ({
    server: {
      name: null,
      id: null,
      iconUrl: null,
      categories: null,
    },
  }),
  components: {
    ServerChannelsBar,
  },
  methods: {
    async getServerInfo(id) {
      const { data } = await api.get(`/servers/${id}`);
      this.server = data;
    },
  },
  async created() {
    await this.getServerInfo(this.$route.params.id);
  },
  async beforeRouteUpdate(to, from, next) {
    this.getServerInfo(to.params.id);
    next();
  },
};
</script>

<style>
</style>
