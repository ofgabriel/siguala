<template>
  <v-container>
    <h1 class="text-center">
      Página para a simulaçao do Selo
    </h1>
    <v-row
      class="conteudo mt-4"
      justify="center"
    >
      <v-col
        cols="3"
        lg="3"
        align="end"
      >
        <trilha
          :etapas="etapas"
          :etapa-atual="etapaAtual"
        />
      </v-col>
      <v-col
        cols="6"
        lg="6"
      >
        <formulario
          :etapas="etapas"
          :etapa-atual="etapaAtual"
          @mudancaDeEtapa="atualizaEtapa"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Trilha from '../components/Trilha.vue';
import Formulario from '../components/Formulario.vue';
import dadosSimulacao from '../assets/dadosSimulacao';

export default {
  titulo: 'Selo Diversidade - Simulação',
  components: {
    Trilha,
    Formulario,
  },
  data() {
    return {
      etapas: dadosSimulacao.etapas,
      etapaAtual: 1,
    };
  },
  methods: {
    atualizaEtapa(novaEtapa) {
      this.etapaAtual = novaEtapa;
    },
  },
};
</script>
