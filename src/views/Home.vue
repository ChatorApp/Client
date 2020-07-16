<template>
  <v-container>
    <SocketIoChat></SocketIoChat>
  </v-container>
</template>

<script>
import api from '../utils/api';
import SocketIoChat from '../components/SocketIoChat.vue';

export default {
  name: 'Home',
  components: {
    SocketIoChat,
  },
  data() {
    return {
      file: null,
    };
  },
  methods: {
    async submit() {
      const fd = new FormData();
      fd.append('upload', this.file);
      const response = await api.postFile('/files/upload', fd);
      console.log(response);
    },
  },
};
</script>
