<template>
  <ChannelPanel>
    <v-list-item>
      <v-col cols="12" sm="2" justify="center" align="center">
        <v-icon>mdi-check-decagram</v-icon>
      </v-col>
      <v-col cols="12" sm="10" justify="center" align="left">{{ Name }}</v-col>
    </v-list-item>
    <v-divider></v-divider>
  </ChannelPanel>
</template>

<script>
import ChannelPanel from '../layout/ChannelPanel.vue';

export default {
  name: 'ServerChannelsBar',
  components: {
    ChannelPanel,
  },
  props: ['Name'],
};
</script>

<style>
</style>
