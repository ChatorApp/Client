<template>
  <div>
    <ServerChannelsBar
      :Name="server.name"
      :Categories="server.categories"
      :SelectedChannel="channel.id"
    ></ServerChannelsBar>
  </div>
</template>

<script>
import ServerChannelsBar from '../components/servers/ServerChannelsBar.vue';

import api from '../utils/api';

export default {
  name: 'ServerChannel',
  data: () => ({
    server: {
      name: null,
      id: null,
      iconUrl: null,
      categories: null,
    },
    channel: {
      name: null,
      id: null,
    },
  }),
  components: {
    ServerChannelsBar,
  },
  methods: {
    async getServerInfo(id) {
      const { data: serverData } = await api.get(`/servers/${id}`);
      this.server = serverData;
    },
    async getChannelInfo(id) {
      const { data: channelData } = await api.get(`/channels/${id}`);
      this.channel = channelData;
    },
  },
  async created() {
    await this.getServerInfo(this.$route.params.serverId);
    await this.getChannelInfo(this.$route.params.channelId);
  },
  async beforeRouteUpdate(to, from, next) {
    this.getServerInfo(to.params.serverId);
    this.getChannelInfo(to.params.channelId);
    next();
  },
};
</script>

<style>
</style>
