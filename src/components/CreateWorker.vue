<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="blue lighten-2" fab dark v-bind="attrs" v-on="on">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="text-h5">Create Worker</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Worker Name"
                v-model="name"
                hint="example of persistent helper text"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="service"
                :items="workerServices"
                item-text="name"
                label="Service"
                required
                return-object
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-card-subtitle> Parameters </v-card-subtitle>
            </v-col>
          <div v-for="parameter, index in parameters" :key="index">
            <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="Key"
                v-model="parameter.name"
                hint="example of persistent helper text"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Default Value"
                v-model="parameter.default_value"
                hint="example of persistent helper text"
                required
              ></v-text-field
            ></v-col>
            </v-row>
            </div>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="addParameter">
          Add Parameter
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="submit"> Submit </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.$store.dispatch("getServices");
  },
  computed: {
    workerServices() {
      return this.$store.state.services.filter(service => service.type === "worker");
    },
  },
  data() {
    return {
      dialog: false,
      el: 1,
      name: "",
      image: "",
      service_type: "",
      parameters: [],
      service: {},
    };
  },
  methods: {
    addParameter() {
      this.parameters.push({"key": "", "default_value": ""})
    },
    submit() {
      let worker_data = {
        name: this.name,
        service_id: this.service.id,
        parameters: this.parameters,
      };
      axios
        .post("http://localhost:8080/api/v1/workers", worker_data)
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.dialog = false;
    },
  },
};
</script>

<style>
</style>