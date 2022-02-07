<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>
        <router-link to="/"> Foreverbull </router-link>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            disabled
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item link to="/backtests">
                  <v-list-item-content>
                    <v-list-item-title> Backtests </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/workers">
                  <v-list-item-content>
                    <v-list-item-title> Worker </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/services">
                  <v-list-item-content>
                    <v-list-item-title> Services </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <router-view></router-view>
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
};
</script>