<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

    <router-link to="/">
      <v-btn 
       outlined
       elevation="4"
       class="mx-2"
      >
        <span class="mr-2">Home</span>
      </v-btn>
    </router-link>

  
    <router-link to="/noticiasf1">
      <v-btn
        text
      >
        <span class="mr-2">Noticias F1</span>
      </v-btn>
    </router-link>

    <router-link to="/scoreboardf1">
      <v-btn
        text
      >
        <span class="mr-2">Temporada 2023 F1</span>
      </v-btn>
    </router-link>

    <router-link to="/login">
      <v-btn
        button
        color="accent"
        elevation="4"
        class="mx-2"
      >
        <span class="mr-2">Login</span>
      </v-btn>
    </router-link>

    <router-link to="/registro">
      <v-btn
        text
      >
        <span class="mr-2">Registro</span>
      </v-btn>
    </router-link>

    </v-app-bar>

    <v-main>
      <router-view/>
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
