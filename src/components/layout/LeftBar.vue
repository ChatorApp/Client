<template>
  <v-navigation-drawer app :mini-variant="true" left>
    <v-list dense nav class="py-0">
      <v-list-item v-for="server in servers" :key="server.id" class="px-0">
        <v-list-item-avatar>
          <img :src="server.icon" />
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
const axios = require('axios').default;

export default {
  name: 'LeftBar',
  data() {
    return {
      servers: [],
    };
  },
  mounted() {
    const vm = this;
    axios
      .get('http://localhost:3000/api/servers/me', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwODI0OTIxNjUxMjgxOTIiLCJ1c2VybmFtZSI6ImJlbiIsImlhdCI6MTU5NDM5ODE3MSwiZXhwIjoxNTk0NDg0NTcxfQ.cAD_ipjuCNcMlTxaYLrZxXsuG9nmS_9OyttzImkcE8s',
        },
      })
      .then((response) => {
        vm.servers = response.data;
      });
  },
};
</script>
