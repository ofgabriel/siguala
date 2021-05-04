<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      elevate-on-scroll
    >
      <router-link :to="{ name: 'Home' }">
        <v-toolbar-title class="white--text pr-10">
          Selo diversidade
        </v-toolbar-title>
      </router-link>
      <v-btn
        text
        :to="{ name: 'About' }"
      >
        About
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
