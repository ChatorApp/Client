<template>
  <v-col class="channelPanel">
    <slot></slot>
  </v-col>
</template>

<script>
export default {
  name: 'ChannelPanel',
};
</script>
<style scoped>
.channelPanel {
  max-width: 240px;
  height: 100vh;
  background-color: var(--v-background-darken1);
  padding: 0;
}
</style>
