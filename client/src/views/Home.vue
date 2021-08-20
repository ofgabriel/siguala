<template>
  <v-container class="ml-0 mr-0 pa-0 main central">
    <informacoes-basicas />
    <v-coontainer class="ml-auto mr-auto explicacoes">
      <explicacao-etapas />
      <explicacao-funcionamento />
    </v-coontainer>
  </v-container>
</template>

<script>
import ExplicacaoEtapas from '../components/ExplicacaoEtapas.vue';
import ExplicacaoFuncionamento from '../components/ExplicacaoFuncionamento.vue';
import InformacoesBasicas from '../components/InformacoesBasicas.vue';

export default {
  name: 'Home',
  titulo: 'Selo Diversidade - Home',

  components: {
    InformacoesBasicas,
    ExplicacaoFuncionamento,
    ExplicacaoEtapas,
  },
};
</script>
<style>
  .explicacoes {
    display: inline-block;
    max-width: 1350px;
  }
  .central {
    text-align: center
  }
</style>
