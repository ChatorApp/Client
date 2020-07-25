<template>
  <div class="serverIconDiv" @click="activated">
    <v-icon v-if="icon" :class="this.class">{{ icon }}</v-icon>
    <img v-else :src="image" :class="this.class" />
  </div>
</template>

<script>
export default {
  name: 'ServerIcon',
  props: {
    icon: String,
    image: String,
    backgroundColor: String,
    to: String,
  },
  data() {
    return {
      class: `serverIconImage ${this.backgroundColor || ''}`,
    };
  },
  methods: {
    activated() {
      if (this.$router.currentRoute.path !== this.to) {
        this.$router.push(this.to);
      }
    },
  },
};
</script>

<style scoped>
.serverIconDiv {
    width: 72px;
    height: 56px;
    background-color: black;
    align-items: center;
    text-align: center;
}
.serverIconImage {
    height: 40px;
    width: 40px;
    min-width: 40px;
    margin: 8px 0px;
    align-items: center;
    position: relative;
    text-align: center;
    overflow: hidden;
    border-radius: 50%;
    cursor: pointer;
}
</style>
