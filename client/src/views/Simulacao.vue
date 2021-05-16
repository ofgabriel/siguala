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
        <trilha :etapa-atual="etapaAtual" />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        Aqui o conteúdo do formulário
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Trilha from '../components/Trilha.vue';

export default {
  titulo: 'Selo Diversidade - Simulação',
  components: {
    Trilha,
  },
  data() {
    return {
      etapaAtual: 3, // esse valor deve vir da Vuex.
    };
  },
};
</script>
