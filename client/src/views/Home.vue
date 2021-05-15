<template>
  <v-container>
    <informacoes-basicas />
  </v-container>
</template>

<script>
import InformacoesBasicas from '../components/InformacoesBasicas.vue';

export default {
  name: 'Home',
  titulo: 'Selo Diversidade - Home',

  components: {
    InformacoesBasicas,
  },
};
</script>
