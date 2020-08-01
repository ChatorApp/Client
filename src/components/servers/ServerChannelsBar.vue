<template>
  <ChannelPanel>
    <vuescroll>
      <div class="serverHeader">
        <span class="serverHeaderText">{{ Name }}</span>
      </div>
      <div class="serverChannels">
        <Category
          v-for="category in Categories"
          :key="category.id"
          :Name="category.name"
          :Channels="category.channels"
        ></Category>
      </div>
    </vuescroll>
  </ChannelPanel>
</template>

<script>
import vuescroll from 'vuescroll';
import Category from '@/components/generic/server/Category.vue';
import ChannelPanel from '@/components/layout/ChannelPanel.vue';

export default {
  name: 'ServerChannelsBar',
  components: {
    ChannelPanel,
    Category,
    vuescroll,
  },
  props: ['Name', 'Categories'],
};
</script>

<style scoped>
.serverHeader {
  height: 56px;
  max-height: 56px;
  display: flex;
  align-items: center;
  margin: auto;
  border-bottom: 1px solid var(--v-background-darken2);
  padding: 0 16px;
  overflow: hidden;
  max-width: 240px;
}
.serverHeaderText {
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre;
}
.serverChannels {
  padding: 16px;
}
</style>
