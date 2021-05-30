<template>
  <div id="formulario">
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
        :resposta-previa="item.resposta"
        @resposta="atualizaResposta($event, topicosIndex, itemIndex)"
      />
    </div>
    <v-btn
      v-if="etapaAtual > 1 && etapaAtual < ultimaEtapa"
      :color="botaoVolta.cor"
      class="float-left"
      @click="botaoVolta.acao"
    >
      <v-icon left>
        mdi-{{ botaoVolta.icone }}
      </v-icon>
      {{ botaoVolta.texto }}
    </v-btn>
    <v-btn
      :disabled="!etapaAtualFoiRespondida"
      :color="botao.cor"
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
import calcularSimulacao from '../services/calcular-simulacao';

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
  computed: {
    ultimaEtapa() {
      return Object.keys(this.etapas).length + 1;
    },
    proximaEtapa() {
      if (this.etapas.find((etapa) => etapa.numero === this.etapaAtual + 1)) {
        return this.etapaAtual + 1;
      }

      return null;
    },
    etapaAnterior() {
      if ((this.etapaAtual - 1) in this.etapas) {
        return this.etapaAtual - 1;
      }
      return null;
    },
    botaoVolta() {
      return {
        cor: 'success',
        icone: 'arrow-up-thick',
        texto: 'Etapa anterior',
        acao: this.voltarEtapa,
      };
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
    etapaAtualFoiRespondida() {
      return this.conteudoEtapaAtual.topicos.reduce(
        (carry1, topico) => carry1 && topico.itens.reduce(
          (carry2, item) => (carry2 && item.resposta),
          true,
        ),
        true,
      );
    },
  },
  methods: {
    voltarEtapa() {
      this.$emit('mudancaDeEtapa', this.etapaAnterior);
    },
    mudancaDeEtapa() {
      this.etapas[this.etapaAtual].visitada = true;
      this.etapas[this.etapaAtual - 1].visitada = true;
      this.$emit('mudancaDeEtapa', this.proximaEtapa);
    },
    submeter() {
      this.etapas[this.etapaAtual - 1].respondida = true;
      const resultado = calcularSimulacao(this.etapas, 5, 7, 10);
      this.$emit('resultadoCalculado', resultado);
    },
    atualizaResposta($event, topicosIndex, itemIndex) {
      this
        .etapas[this.etapaAtual - 1].topicos[topicosIndex].itens[itemIndex].resposta = $event;
      this
        .etapas[this.etapaAtual - 1].respondida = this.etapaAtualFoiRespondida;
    },
  },
};
</script>

<style>

</style>
