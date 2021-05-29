<template>
  <v-container
    id="conteudo"
    class="pt-5"
  >
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
        id="trilha"
        cols="12"
        md="3"
        align="end"
      >
        <trilha
          :etapas="etapas"
          :etapa-atual="etapaAtual"
          @mudancaDeEtapa="atualizaEtapa"
        />
      </v-col>
      <v-col
        v-if="etapaAtual<Object.keys(etapas).length+1"
        cols="12"
        md="6"
        class="formulario"
      >
        <formulario
          :etapas="etapas"
          :etapa-atual="etapaAtual"
          @formularioSubmetido="resultado = $event"
          @mudancaDeEtapa="atualizaEtapa"
        />
      </v-col>
      <v-col
        v-else
        cols="6"
        lg="6"
        class="formulario"
      >
        <exibir-resultado
          :padrao="1"
          :pontuacao="100"
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
  beforeMount() {
    this.adicionaFlags();
  },
  methods: {
    atualizaEtapa(novaEtapa) {
      this.etapaAtual = novaEtapa;
      document.documentElement.scrollTop = 0;
    },
    adicionaFlags() {
      this.etapas = this.etapas.map((etapa) => ({
        ...etapa,
        respondida: false,
        visitada: etapa.numero === 1,
        topicos: etapa.topicos.map((topico) => ({
          ...topico,
          itens: topico.itens.map(
            (item) => ({
              ...item,
              resposta: null,
            }),
          ),
        })),
      }));
    },
  },
};
</script>
<style>
@media only screen and (min-width: 960px) {
  .formulario {
    margin-left:30%;
    display: block;
  }
  #trilha {
    left:16%;
    position:fixed;
  }
}
@media only screen and (max-width: 959px) {
  .formulario {
    display: block;
  }
  #trilha {
    position:sticky;
    top:50px;
    z-index: 1;
    background-color: white;
    padding-bottom: 32px;
    padding-top: 32px;
  }
}

</style>
