<template>
  <v-row class="text-center">
    <v-col cols="12">
      <p class="msg-resultado">
        <strong>{{ selos[seloCalculado].texto }}</strong>
      </p>
      <img
        v-if="selos[seloCalculado].imagem"
        class="selo-resultado"
        :src="selos[seloCalculado].imagem"
      >
      <p class="msg-resultado">
        Total de pontos: {{ pontuacao }}
      </p>
    </v-col>
    <conteudo-educativo :conteudos="conteudosEducativos" />
  </v-row>
</template>

<script>
import imagemSeloOuro from '../../public/SeloOuro.svg';
import imagemSeloPrata from '../../public/SeloPrata.svg';
import imagemSeloBronze from '../../public/SeloBronze.svg';
import ConteudoEducativo from './ConteudoEducativo.vue';
import mockConteudos from '../../assets/mockConteudoEducativo';

export default {
  name: 'ExibirResultado',
  components: {
    ConteudoEducativo,
  },
  props: {
    seloCalculado: {
      type: Number,
      required: true,
    },
    pontuacao: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      selos: {
        0: {
          texto: 'Infelizmente você não pontuou o necessário para obtenção do selo',
          imagem: null,
        },
        1: {
          imagem: imagemSeloOuro,
          texto: 'Parabéns! Você obteve o selo ouro!',
        },
        2: {
          imagem: imagemSeloPrata,
          texto: 'Parabéns! Você obteve o selo prata!',
        },
        3: {
          imagem: imagemSeloBronze,
          texto: 'Parabéns! Você obteve o selo bronze!',
        },

      },
      conteudosEducativos: mockConteudos.conteudos,
    };
  },
  methods: {

  },
};
</script>
<style >
img.selo-resultado {
  max-width: 100%;
  height:220px;
}
</style>
