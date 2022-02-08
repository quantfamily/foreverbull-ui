<template>
  <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        md="4"
        v-for="worker in workers"
        :key="worker.id"
      >
        <v-card>
          <v-card-title class="text-h5"> {{ worker.name }}</v-card-title>
          <v-card-subtitle> 
              {{ worker.id }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn text>Instances</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="d-flex" cols="12" md="4">
        <create-worker/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
    name: "ForeverbullWorkers",
  mounted() {
    this.$store.dispatch("getWorkers");
  },
  computed: {
    workers() {
      return this.$store.state.workers
    }
  }
};
</script>

<style>
</style>