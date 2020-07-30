<template>
  <v-dialog v-model="dialog" persistent max-width="30%">
    <template v-slot:activator="{ on, attrs }">
      <div class="serverIconDiv" v-bind="attrs" v-on="on">
        <v-icon class="serverIconImage indigo">mdi-server-network</v-icon>
      </div>
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
import CreateServerDialog from '@/components/dialogs/server/CreateServerDialog.vue';
import JoinServerDialog from '@/components/dialogs/server/JoinServerDialog.vue';

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
<style scoped>
.serverIconDiv {
  width: 72px;
  height: 56px;
  background-color: var(--v-background-darken2);
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
}
</style>
