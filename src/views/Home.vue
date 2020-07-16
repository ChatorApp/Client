<template>
  <v-container>
    <SocketIoChat></SocketIoChat>
  </v-container>
</template>

<script>
import SocketIoChat from '../components/SocketIoChat.vue';

export default {
  name: 'Home',
  components: {
    SocketIoChat,
  },
  data() {
    //
  },
};
</script>
