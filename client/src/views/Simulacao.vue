<template>
  <v-container class="pt-5">
    <v-row v-if="resultado">
      <exibir-resultado
        :pontuacao="resultado.pontos"
        :padrao="resultado.selo"
      />
    </v-row>
    <v-row
      v-else
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
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <formulario
          :etapas="etapas"
          :etapa-atual="etapaAtual"
          @simular="resultado = $event"
          @mudancaDeEtapa="atualizaEtapa"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Trilha from '../components/Trilha.vue';
import Formulario from '../components/Formulario.vue';
import ExibirResultado from '../components/ExibirResultado.vue';
import dadosSimulacao from '../assets/dadosSimulacao';

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
      resultado: null,
    };
  },
  methods: {
    atualizaEtapa(novaEtapa) {
      this.etapaAtual = novaEtapa;
    },
  },
};
</script>
