<template>
  <div class="action">
    <p class="text-center">{{ Title }}</p>
    <div :style="actionIconStyle"></div>
    <v-btn :to="ButtonUrl">{{ ButtonText }}</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Action',
  props: {
    Title: String,
    Icon: String,
    ButtonText: String,
    ButtonUrl: String,
  },
  computed: {
    actionIconStyle() {
      return {
        width: '100%',
        margin: '26px 0',
        'background-position': '50%',
        'background-repeat': 'no-repeat',
        'background-image': `url(/assets/${this.Icon}`,
      };
    },
  },
};
</script>

<style scoped>
.action {
    width: 228px;
    max-width: 228px;
    text-align: center;
    padding: 16px;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid;
}
</style>
