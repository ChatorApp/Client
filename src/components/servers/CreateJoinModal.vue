<template>
  <v-dialog v-model="dialog" persistent max-width="290">
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
      <v-card-title>Create or Join a Server</v-card-title>
      <v-card-text>
          <v-container>
              <v-row>
                  <v-col cols="12" sm="6">
                      Create a server
                  </v-col>
                  <v-col cols="12" sm="6">
                      Join a server
                  </v-col>
              </v-row>
          </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'CreateJoinModal',
};
</script>
