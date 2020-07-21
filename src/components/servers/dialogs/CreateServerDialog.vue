<template>
  <v-dialog v-model="dialog" persistent max-width="50%">
    <template v-slot:activator="{ on, attrs }">
      <Action
        title="Create a server!"
        Icon="new-server"
        ButtonText="Create a Server"
        v-bind="attrs"
        v-on="on"
        @actionClicked="dialog = true"
      ></Action>
    </template>
    <v-card>
      <v-card-text>
        <v-container>
          <h1 class="text-center">Create your Chator Server</h1>
          <h3 class="text-center">
            Create a community for family, friends, co workers or the public!
          </h3>
          <v-form @submit.prevent="submit">
            <v-row>
              <v-col cols="12" sm="6" align="center" justify="center">
                <v-text-field
                  v-model="formData.serverName"
                  :rules="rules.name"
                  :counter="32"
                  label="Server Name"
                  required
                ></v-text-field>
                <v-textarea
                  v-model="formData.serverDescription"
                  :rules="rules.description"
                  :counter="256"
                  label="Server Description"
                  required
                ></v-textarea>
              </v-col>
              <v-col cols="12" sm="6" align="center" justify="center">
                <v-file-input
                  v-model="formData.icon"
                  accept="image/*"
                  label="Icon"
                  required
                  :rules="rules.icon"
                ></v-file-input>
                <v-btn>Create Server</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import api from '../../../utils/api';
import Action from '../../generic/Action.vue';

export default {
  name: 'CreateServerDialog',
  components: {
    Action,
  },
  data() {
    return {
      dialog: false,
      formData: {
        serverName: '',
        serverDescription: '',
        icon: null,
      },
      rules: {
        name: [
          (v) => !!v || 'Name is required',
          (v) => v.length <= 32 || 'Name must be less than 32 characters',
        ],
        description: [
          (v) => !!v || 'Description is required',
          (v) => v.length <= 256 || 'Description must be less than 256 characters',
        ],
        icon: [(v) => !!v || 'Icon is required'],
      },
    };
  },
  methods: {
    async submit() {
      const fd = new FormData();
      fd.append('upload', this.formData.icon);
      fd.append('name', this.formData.serverName);
      fd.append('description', this.formData.serverDescription);
      await api.postFile('/servers/create', fd);
    },
  },
};
</script>

<style>
</style>
