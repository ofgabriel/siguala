<template>
  <v-container class="ml-0 mr-0 pa-0 main" fluid>
    <informacoes-basicas />
    <explicacao-funcionamento />
  </v-container>
</template>

<script>
import ExplicacaoFuncionamento from '../components/ExplicacaoFuncionamento.vue';
import InformacoesBasicas from '../components/InformacoesBasicas.vue';

export default {
  name: 'Home',
  titulo: 'Selo Diversidade - Home',

  components: {
    InformacoesBasicas,
    ExplicacaoFuncionamento,
  },
};
</script>
