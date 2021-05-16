<template>
  <div>
    <div
      v-for="topico, topicosIndex in conteudoEtapaAtual.topicos"
      :key="`topico-${topicosIndex}`"
      class="mb-4"
    >
      <div class="title">
        {{ topico.nome }}
      </div>
      <v-divider :key="`divider-${topicosIndex}`" />
      <pergunta
        v-for="item, itemIndex in topico.itens"
        :key="`pergunta-${itemIndex}-topico-${topicosIndex}-etapa-${etapaAtual}`"
        class="ml-8"
        :pergunta="item.pergunta"
        @resposta="atualizaResposta($event, topicosIndex, itemIndex)"
      />
    </div>
    <v-btn
      :color="
        botao.cor"
      class="float-right"
      @click="botao.acao"
    >
      <v-icon left>
        mdi-{{ botao.icone }}
      </v-icon>
      {{ botao.texto }}
    </v-btn>
  </div>
</template>

<script>

import Pergunta from './Pergunta.vue';

export default {
  name: 'Formulario',
  components: {
    Pergunta,
  },
  props: {
    etapas: {
      type: Array,
      required: true,
    },
    etapaAtual: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    proximaEtapa() {
      if ((this.etapaAtual + 1) in this.etapas) {
        return this.etapaAtual + 1;
      }

      return null;
    },
    botao() {
      if (this.proximaEtapa) {
        return {
          cor: 'success',
          icone: 'arrow-down-thick',
          texto: 'Próxima etapa',
          acao: this.mudancaDeEtapa,
        };
      }

      return {
        cor: 'primary',
        icone: 'cloud-upload',
        texto: 'Submeter',
        acao: this.submeter,
      };
    },
    conteudoEtapaAtual() {
      return this.etapas.find((etapa) => etapa.numero === this.etapaAtual);
    },
  },
  methods: {
    mudancaDeEtapa() {
      this.$emit('mudancaDeEtapa', this.proximaEtapa);
    },
    submeter() {
      alert('Formulário submetido!');
    },
    atualizaResposta($event, topicosIndex, itemIndex) {
      this
        .etapas[this.etapaAtual - 1].topicos[topicosIndex].itens[itemIndex].resposta = $event;
    },
  },
};
</script>

<style>

</style>
