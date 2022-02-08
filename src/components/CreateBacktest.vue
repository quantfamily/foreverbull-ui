<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="blue lighten-2" fab dark v-bind="attrs" v-on="on">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="text-h5">Create Backtest</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Backtest Name"
                v-model="name"
                hint="example of persistent helper text"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="service"
                :items="backtestService"
                item-text="name"
                label="Service"
                required
                return-object
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-card-subtitle> Configuration </v-card-subtitle>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Start Date"
                v-model="configuration.StartDate"
                hint="example of persistent helper text"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="End Date"
                v-model="configuration.EndDate"
                hint="example of persistent helper text"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-combobox
                v-model="configuration.assets"
                :items="configuration.assets"
                label="Assets"
                multiple
                dense
              ></v-combobox>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="configuration.benchmark"
                :items="configuration.assets"
                label="Benchmark"
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
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
    backtestService() {
      return this.$store.state.services.filter(
        (service) => service.type === "backtest"
      );
    },
  },
  data() {
    return {
      dialog: false,
      el: 1,
      name: "",
      service: {},
      configuration: {
        StartDate: "2016-01-01",
        EndDate: "2016-12-31",
        assets: [
          "AAPL",
          "SBUX",
          "MSFT",
          "CSCO",
          "QCOM",
          "FB",
          "AMZN",
          "TSLA",
          "AMD",
          "ZNGA",
        ],
        benchmark: "AAPL",
        timezone: "utc",
      },
    };
  },
  methods: {
    submit() {
      let backtest_data = {
        name: this.name,
        service_id: this.service.id,
        configuration: this.configuration,
      };
      axios
        .post("http://localhost:8080/api/v1/backtests", backtest_data)
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