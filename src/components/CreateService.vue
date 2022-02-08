<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="blue lighten-2" fab dark v-bind="attrs" v-on="on">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </template>

    <v-card>
        <v-card-title>
          <span class="text-h5">Create Service</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Service Name"
                  v-model="name"
                  hint="example of persistent helper text"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Image"
                  v-model="image"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-select
                  v-model="service_type"
                  :items="['Backtest', 'Worker']"
                  label="Service Type"
                  required
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="submit"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      dialog: false,
      el: 1,
      name: "",
      image: "",
      service_type: ""
    };
  },
  methods: {
    submit() {
      let service_data = {
        "name": this.name,
        "image": this.image,
        "type": this.service_type.toLowerCase(),
      }
      console.log(service_data)
      axios.post("http://localhost:8080/api/v1/services", service_data)
      .then(response => {
          console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
      this.dialog = false
    }
  }
};
</script>

<style>
</style>