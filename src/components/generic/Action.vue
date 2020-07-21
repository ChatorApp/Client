<template>
  <div class="action" @click="$emit('actionClicked')">
    <p class="text-center">
      <strong>{{ Title }}</strong>
    </p>
    <div :style="actionIconStyle"></div>
    <v-btn>{{ ButtonText }}</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Action',
  props: {
    Title: String,
    Icon: String,
    ButtonText: String,
  },
  computed: {
    actionIconStyle() {
      return {
        'background-image': `url(/assets/${this.Icon}.svg`,
        'background-position': '50%',
        'background-repeat': 'no-repeat',
        'background-size': '90% 90%',
        height: '78px',
        margin: '26px 0',
        width: '100%',
      };
    },
  },
};
</script>

<style scoped>
.action {
  width: 100%;
  max-width: 228px;
  text-align: center;
  padding: 16px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid;
  border-radius: 7.5px;
}
</style>
