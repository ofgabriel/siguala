<template>
  <v-row
    justify="space-between"
    align="stretch"
    class="explicacao explicacao-cards"
  >
    <v-col
      cols="12"
      class="titulo"
    >
      <h2>
        Etapas de aquisição do selo
      </h2>
    </v-col>
    <v-col
      cols="12"
      md="3"
    >
      <v-card flat class="card">
        <v-card-title class="pa-0">
          Aceite da  Simulação
        </v-card-title>
        <v-card-text class="pa-0">
          Este é o início da simulação. As perguntas realizadas a partir
          desta etapa identificarão possíveis problemas que podem levar
          a uma desigualdade de gênero.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col
        cols="12"
        md="3"
        class="d-md-none"
      >
        <v-card flat class="card">
          <v-card-title class="pa-0">
            Equipe de Implementação
          </v-card-title>
          <v-card-text class="pa-0">
            Momento de identificação das pessoas ou grupo de responsáveis
            por ajudar a avaliar a empresa sobre igualdade de gênero.

          </v-card-text>
        </v-card>
      </v-col>
    <v-col
      cols="12"
      md="3"
    >
      <v-card flat class="card">
        <v-card-title class="pa-0">
          Análise da Empresa
        </v-card-title>
        <v-card-text class="pa-0">
          A partir de uma visão mais geral da empresa, vamos identificar brechas importantes
        </v-card-text>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      md="3"
    >
      <v-card flat class="card">
        <v-card-title class="pa-0">
          Política de Igualdade de Gênero
        </v-card-title>
        <v-card-text class="pa-0">
          Por fim, com o objetivo de integrar a cultura da empresa,
          vamos desenvolver e melhorar a igualdade de gênero.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      md="3"
      class="d-md-none"
    >
      <v-card flat class="card">
        <v-card-title class="pa-0">
          Plano de Ação
        </v-card-title>
        <v-card-text class="pa-0">
          Com o objetivo de diversificar e tornar a empresa cada vez um lugar melhor,
          vamos analisar quais os planos que estão sendo traçados para resolver isso.

        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" />
    <v-row class="d-none d-md-block d-md-flex">
      <template
        v-for="i in etapas"
        class="d-flex"
      >
        <v-btn
          :key="`btn-${i}`"
          z-index="10"
          class="circulo ml-auto mr-auto"
          fab
          dark
          x-large
          min-height="140"
          min-width="140"
          elevation="6"
          plain
        >
          <h2>{{ i }}</h2>
        </v-btn>
      </template>
    </v-row>
    <v-col
      cols="12"
      class="d-none d-md-block"
    >
      <v-lazy>
        <v-sparkline
          z-index="1"
          :v-if="mostraCurva"
          auto-draw
          :value="curva"
          line-width="0.5"
          smooth="40"
          height="80"
          auto-draw-duration="4000"
          class="abaixo ml-10 mr-10"
        />
      </v-lazy>
    </v-col>
    <v-row justify="space-around">
      <v-col
        cols="12"
        md="3"
        class="d-none d-md-block"
      >
        <v-card flat class="card">
          <v-card-title class="pa-0">
            Equipe de Implementação
          </v-card-title>
          <v-card-text class="pa-0">
            Momento de identificação das pessoas ou grupo de responsáveis
            por ajudar a avaliar a empresa sobre igualdade de gênero.

          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="3"
        class="d-none d-md-block"
      >
        <v-card flat class="card">
          <v-card-title class="pa-0">
            Plano de Ação
          </v-card-title>
          <v-card-text class="pa-0">
            Com o objetivo de diversificar e tornar a empresa cada vez um lugar melhor,
            vamos analisar quais os planos que estão sendo traçados para resolver isso.

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>

export default {
  name: 'ExplicacaoEtapas',
  data() {
    return {
      curva: [0, -0.8, -1, -0.8, 0, 0.8, 1, 0.8, 0, -0.8, -1, -0.8, 0, 0.8, 1, 0.8, 0],
      etapas: ['1', '2', '3', '4', '5'],
    };
  },
  computed: {
    mostraCurva() {
      if (this.$vuetify.breakpoint.width > 700) {
        return false;
      }
      return false;
    },
  },
};
</script>

<style>
  @media only screen and (max-width: 600px) {
    .below {
      display:none;
    }
  }
  .abaixo {
    margin-top:-190px;
    max-height: 300px;
  }
  .circulo {
    background-color: white;
  }
  .circulo h2 {
    color: black;
    font-size: 60px;
    font-weight: 900;
  }
  .explicacao {
    text-align: left;
  }
  .card {
    height: 100%;
  }
  .v-card__text, .v-card__title {
    word-break: normal !important
  }
</style>
