<template>
  <v-app class="app">
    <v-app-bar
      app
      color="primary"
      dark
      elevate-on-scroll
      height="80"
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.width <= 700"
        @click="drawer = true"
      />
      <router-link :to="{ name: 'Home' }">
        <v-toolbar-title class="white--text pr-10 menu">
          <span
            class="logo"
            v-if="$vuetify.breakpoint.width > 700"
          /> Selo de Igualdade de Gênero
        </v-toolbar-title>
      </router-link>
      <v-tabs
        v-if="$vuetify.breakpoint.width > 700"
        right
      >
        <v-tab
          :to="{ name: 'Home' }"
          class="menu"
        >
          Home
        </v-tab>
        <v-tab
          :to="{ name: 'Simulacao' }"
          class="menu"
        >
          Simular Selo
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.width <= 700"
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >
          <v-list-item :to="{ name: 'Home' }">
            <v-list-item-title class="menu">
              Home
            </v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'Simulacao' }">
            <v-list-item-title class="menu">
              Simulação
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
    <footer
      id="footer"
    >
      <p class="footer-txt">
        Este projeto é uma iniciativa de professoras e alunos da Faculdade de Direito da UFRJ,
        membros da Liga de Direito e Tecnologia, e desenvolvido em parceria com alunos da
        COPPE/UFRJ (Instituto Alberto Luiz Coimbra de Pós-Graduação e Pesquisa de Engenharia).
      </p>
    </footer>
  </v-app>
</template>

<script>

export default {
  components: {},
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
/* body, #app, .container, .v-main__wrap, .main {
  display: flex !important;
  min-height: 100vh !important;
  flex-direction: column !important;
  flex:1;
} */
.logo {
  height: 36px;
  width: 36px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 12px;
  margin-left: 20px;
}
.menu {
  height: 100%;
  font-family: Montserrat;
}
#footer {
  height:300px;
  background-color: #D8D8D8;
  flex-shrink: 0;
}
.footer-txt {
  padding: 40px 10%;
}
.main {
  width:100% !important;
  max-width:100% !important;
}
</style>
