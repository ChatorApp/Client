<template>
  <v-dialog v-model="dialog" persistent max-width="30%">
    <template v-slot:activator="{ on, attrs }">
      <v-list-item v-bind="attrs" v-on="on">
        <v-list-item-avatar>
          <v-avatar color="indigo" style="min-width: 0px;">
            <v-icon>mdi-server-network</v-icon>
          </v-avatar>
        </v-list-item-avatar>
      </v-list-item>
    </template>
    <v-card>
      <v-card-text>
        <v-container>
          <h1 class="text-center">Create or Join a Server</h1>
          <v-row>
            <v-col cols="12" sm="6" align="center">
              <CreateServerDialog></CreateServerDialog>
            </v-col>
            <v-col cols="12" sm="6" align="center">
              <JoinServerDialog></JoinServerDialog>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import CreateServerDialog from './CreateServerDialog.vue';
import JoinServerDialog from './JoinServerDialog.vue';

export default {
  name: 'CreateJoinModal',
  components: {
    CreateServerDialog,
    JoinServerDialog,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
