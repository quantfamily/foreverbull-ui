<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" md="4">
        <create-worker :open="true" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ForeverbullServices",
  mounted() {
      this.$store.dispatch("getServices");
  }
};
</script>

<style>
</style>