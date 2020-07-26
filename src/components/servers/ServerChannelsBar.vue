<template>
  <ChannelPanel>
    <div class="text-center">{{ Name }}</div>
    <v-divider></v-divider>
  </ChannelPanel>
</template>

<script>
import api from '@/utils/api';

import ChannelPanel from '../layout/ChannelPanel.vue';

export default {
  name: 'ServerChannelsBar',
  components: {
    ChannelPanel,
  },
  props: ['Name', 'Id'],
  data() {
    return {
      categories: null,
    };
  },
  async mounted() {
    const response = await api.get(`/categories/for/${this.Id}`);
    this.categories = response.data;
  },
};
</script>

<style>
</style>
