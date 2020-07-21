<template>
  <v-dialog v-model="dialog" persistent max-width="30%">
    <template v-slot:activator="{ on, attrs }">
      <Action
        title="Join a server!"
        Icon="join-server"
        ButtonText="Join a Server"
        v-bind="attrs"
        v-on="on"
        @actionClicked="dialog = true"
      ></Action>
    </template>
    <v-card>
      <v-card-text>
        <v-container>
          <h1 class="text-center">Join a Server</h1>
          <v-row>Test</v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Action from '../../generic/Action.vue';

export default {
  name: 'CreateServerDialog',
  components: {
    Action,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style>
</style>
