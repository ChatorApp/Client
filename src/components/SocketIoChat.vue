<template>
  <v-container>
    <v-row class="text-center">
      <div class="card mt-3">
        <div class="card-body">
          <div class="card-title">
            <h3>Chat Group</h3>
            <hr />
          </div>
          <div class="card-body">
            <div class="messages" v-for="(msg, index) in messages" :key="index">
              <p>
                <span class="font-weight-bold">{{ msg.user.name }} ({{ msg.user.id }}):</span>
                {{ msg.message.content }} @ {{ msg.message.timestamp }}
              </p>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <form @submit.prevent="sendMessage">
            <div class="gorm-group">
              <label for="user">User:</label>
              <input type="text" v-model="user" class="form-control" />
            </div>
            <div class="gorm-group pb-3">
              <label for="message">Message:</label>
              <input type="text" v-model="message" class="form-control" />
            </div>
            <button type="submit" class="btn btn-success">Send</button>
          </form>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: 'SocketIoChat',
  data() {
    return {
      user: '',
      message: '',
      messages: [],
      socket: io('localhost:3000'),
    };
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
        jwt_token: JSON.parse(localStorage.getItem('api_key')).key,
        message: this.message,
      });
      this.message = '';
    },
  },
  mounted() {
    this.socket.on('MESSAGE', (data) => this.messages.push(data));
  },
};
</script>
