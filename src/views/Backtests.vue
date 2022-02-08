<template>
  <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        md="4"
        v-for="backtest in backtests"
        :key="backtest.id"
      >
        <v-card>
          <v-card-title class="text-h5"> {{ backtest.name }}</v-card-title>
          <v-card-subtitle> 
              {{ backtest.id }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn text>Sessions</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="d-flex" cols="12" md="4">
        <create-backtest/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
    name: "ForeverbullBacktests",
  mounted() {
    this.$store.dispatch("getBacktests");
  },
  computed: {
    backtests() {
      return this.$store.state.backtests
    }
  }
};
</script>

<style>
</style>