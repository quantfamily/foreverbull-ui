<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" md="4">
        <v-card color="#385F73" dark>
          <v-card-title class="text-h5"> Unlimited music now </v-card-title>

          <v-card-subtitle
            >Listen to your favorite artists and albums whenever and wherever,
            online and offline.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn text> Listen Now </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="d-flex" cols="12" md="4">
        <v-card color="#385F73" dark>
          <v-card-title class="text-h5"> Unlimited music now </v-card-title>

          <v-card-subtitle
            >Listen to your favorite artists and albums whenever and wherever,
            online and offline.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn text> Listen Now </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="d-flex" cols="12" md="4">
        <create-worker :open="true" />
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
};
</script>

<style>
</style>