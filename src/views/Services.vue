<template>
  <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        md="4"
        v-for="service in services"
        :key="service.id"
      >
        <v-card>
          <v-card-title class="text-h5"> {{ service.name }}</v-card-title>
          <v-card-subtitle> 
              {{ service.id }}
              {{ service.type }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn text>Instances</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="d-flex" cols="12" md="4">
        <create-service/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ForeverbullServices",
  mounted() {
    this.$store.dispatch("getServices");
  },
  computed: {
    services() {
      return this.$store.state.services;
    },
  },
};
</script>

<style>
</style>