<template>
  <ChannelPanel>
    <vuescroll>
      <div class="serverHeader text-center">{{ Name }}</div>
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
}
.serverChannels {
  padding: 16px;
}
</style>
