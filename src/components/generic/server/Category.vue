<template>
  <div class="category">
    <div class="categoryName">{{ Name }}</div>
    <Channel
      v-for="channel in Channels"
      :key="channel.id"
      :Channel="channel"
      :ActiveChannel="SelectedChannel === channel.id"
    ></Channel>
  </div>
</template>

<script>
import Channel from '@/components/generic/server/Channel.vue';

export default {
  name: 'Category',
  components: {
    Channel,
  },
  props: {
    Name: null,
    Channels: null,
    SelectedChannel: null,
  },
};
</script>

<style scoped>
.category {
  padding: 10px 0;
}
.categoryName {
  color: var(--v-channel-base);
}
.categoryName:hover {
  color: var(--v-channel-lighten2);
}
</style>
