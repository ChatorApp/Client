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
      <v-card-text>
        <v-container>
          <h1 class="text-center">Create or Join a Server</h1>
          <v-row>
            <v-col cols="12" sm="6">
              <Action
                title="<strong>Create</strong> a server!"
                Icon="account-multiple-plus"
                ButtonText="Create a server"
                ButtonUrl="/test"
              ></Action>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Action from '@/components/generic/Action.vue';

export default {
  name: 'CreateJoinModal',
  components: {
    Action,
  },
};
</script>
