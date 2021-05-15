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
        <trilha :etapa-atual="etapaAtual" />
      </v-col>
      <v-col
        cols="6"
        lg="6"
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
