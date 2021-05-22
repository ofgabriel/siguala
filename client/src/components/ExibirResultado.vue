<template>
  <v-row class="text-center">
    <v-col cols="12">
      <p class="msg-resultado">
        <strong>{{ labeltxt[padrao] }}</strong>
      </p>
      <img
        classs="selo-resultado"
        height="220"
        :src="labelsrc[padrao]"
      >
      <p class="msg-resultado">
        Total de pontos: {{ pontuacao }}
      </p>
    </v-col>
  </v-row>
</template>

<script>
import imagemSeloOuro from '../../public/SeloOuro.svg';
import imagemSeloPrata from '../../public/SeloPrata.svg';
import imagemSeloBronze from '../../public/SeloBronze.svg';

export default {
  name: 'ExibirResultado',
  props: {
    padrao: {
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
      labelsrc: [
        imagemSeloOuro,
        imagemSeloOuro,
        imagemSeloPrata,
        imagemSeloBronze,
      ],
      labeltxt: [
        'Infelizmente você não pontuou o necessário para obtenção do selo',
        'Parabéns! Você obteve o selo ouro!',
        'Parabéns! Você obteve o selo prata!',
        'Parabéns! Você obteve o selo bronze!',
      ],
    };
  },
  methods: {

  },
};
</script>

<style >
</style>
