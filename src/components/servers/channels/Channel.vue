<template>
  <div class="channelItem" @click="openChannel"># {{ Channel.name }}</div>
</template>

<script>
export default {
  name: 'Channel',
  props: {
    Channel: null,
  },
  methods: {
    openChannel() {
      if (this.$router.currentRoute.path !== `/channels/${this.Channel.id}`) {
        this.$router.push(`/channels/${this.Channel.id}`);
      }
    },
  },
};
</script>

<style scoped>
.channelItem {
  height: 32px;
  padding: 2.5px 0;
  color: var(--v-channel-base);
  border-radius: 4px;
}
.channelItem:hover {
  color: var(--v-channel-lighten2);
  background-color: var(--v-background-base);
}
</style>
