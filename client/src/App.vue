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
            v-if="$vuetify.breakpoint.width > 700"
            class="logo"
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
      <router-view />
    </v-main>
    <footer
      id="footer"
    >
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          cols="12"
          md="4"
        >
          <p class="footer-txt">
            Essa tecnologia é resultado de um projeto de extensão da Liga de Direito e Tecnologia da FND/UFRJ e PESC.
            Coordenado pelo professor Guilherme Travassos e as professoras
            Kone Cesário e Ana Lúcia Sabadell da UFRJ e Soraya Gasparetto da UNESP.
          </p>
        </v-col>
        <v-col
          cols="12"
          md="2"
        >
          <v-img
            :src="logo_fnd"
            class="img-footer"
            max-width="160px"
            contain
          />
        </v-col>
        <v-col
          cols="12"
          md="2"
        >
          <v-img
            :src="logo_coppe"
            class="img-footer"
            max-width="150px"
            contain
          />
        </v-col>
      </v-row>
    </footer>
  </v-app>
</template>

<script>
import logoCoppe from '../public/logo-coppe.svg';
import logoFND from '../public/logo-fnd.png';

export default {
  name: 'App',
  components: {},

  data: () => ({
    drawer: false,
    group: null,
    logo_fnd: logoFND,
    logo_coppe: logoCoppe,
  }),
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
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
  margin-top:20px;
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
.img-footer {
  margin: auto;
}
</style>
