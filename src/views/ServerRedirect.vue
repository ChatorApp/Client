<template>
  <div></div>
</template>

<script>
import api from '@/utils/api';

export default {
  name: 'ServerRedirect',
  methods: {
    async redirect(serverId) {
      const { data: server } = await api.get(`/servers/${serverId}`);
      const firstCategory = server.categories[0];
      const firstChannel = firstCategory.channels[0];
      this.$router.push(`/channels/${serverId}/${firstChannel.id}`);
    },
  },
  async created() {
    await this.redirect(this.$route.params.id);
  },
  async beforeRouteUpdate(to, from, next) {
    await this.redirect(to.params.id);
    next();
  },
};
</script>
