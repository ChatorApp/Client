<template>
  <div :style="channelItemStyle" @click="openChannel"># {{ Channel.name }}</div>
</template>

<script>
export default {
  name: 'Channel',
  props: {
    Channel: null,
    ActiveChannel: null,
  },
  methods: {
    openChannel() {
      if (
        this.$router.currentRoute.path !== `/channels/${this.Channel.server}/${this.Channel.id}`
      ) {
        this.$router.push(`/channels/${this.Channel.server}/${this.Channel.id}`);
      }
    },
  },
  computed: {
    channelItemStyle() {
      return {
        height: '32px',
        padding: '2.5px 5px',
        color: `var(--v-channel-${this.ActiveChannel ? 'lighten3' : 'base'})`,
        'background-color': `var(--v-background-${this.ActiveChannel ? 'base' : 'darken1'})`,
        'border-radius': '4px',
      };
    },
  },
};
</script>
