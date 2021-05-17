<template>
  <v-container>
    <h2 class="text-center">
      Simulação
    </h2>
    <v-row
      class="mt-4"
      justify="center"
    >
      <v-col
        cols="12"
        md="3"
        align="end"
      >
        <trilha
          :etapas="etapas"
          :etapa-atual="etapaAtual"
          @mudancaDeEtapa="atualizaEtapa"
        />
      </v-col>
      <v-col
        v-if="this.etapaAtual<Object.keys(this.etapas).length+1"
        cols="12"
        md="6"
      >
        <formulario
          :etapas="etapas"
          :etapa-atual="etapaAtual"
          @mudancaDeEtapa="atualizaEtapa"
        />
      </v-col>
      <v-col
        v-else
        cols="6"
        lg="6"
      >
        <exibir-resultado
          v-bind:padrao="1"
          v-bind:pontuacao="100" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Trilha from '../components/Trilha.vue';
import Formulario from '../components/Formulario.vue';
import dadosSimulacao from '../assets/dadosSimulacao';
import ExibirResultado from '../components/ExibirResultado.vue';

export default {
  titulo: 'Selo Diversidade - Simulação',
  components: {
    Trilha,
    Formulario,
    ExibirResultado,
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
