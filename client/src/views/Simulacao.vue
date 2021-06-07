<template>
  <v-container
    id="conteudo"
    class="pt-5"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        sm="8"
        md="6"
        lg="5"
      >
        <cadastro-empresa
          v-if="!empresaCadastrada"
          @empresaCadastrada="setEmpresa"
        />
      </v-col>
    </v-row>
    <v-row v-if="resultado">
      <exibir-resultado
        :pontuacao="resultado.pontos"
        :selo-calculado="resultado.selo"
      />
    </v-row>
    <v-row
      v-if="empresaCadastrada && !resultado"
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
          @resultadoCalculado="exibeResultado"
          @mudancaDeEtapa="atualizaEtapa"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Trilha from '../components/Trilha.vue';
import Formulario from '../components/Formulario.vue';
import ExibirResultado from '../components/ExibirResultado.vue';
import CadastroEmpresa from '../components/CadastroEmpresa.vue';
import dadosSimulacao from '../assets/dadosSimulacao';
import API from '../api';

export default {
  titulo: 'Selo Diversidade - Simulação',
  name: 'Simulacao',
  components: {
    Trilha,
    Formulario,
    ExibirResultado,
    CadastroEmpresa,
  },
  data() {
    return {
      empresa: null,
      id: null,
      etapas: dadosSimulacao.etapas,
      etapaAtual: 1,
      resultado: null,
    };
  },
  computed: {
    empresaCadastrada() {
      if (this.empresa && this.empresa.nome && this.empresa.cnpj && this.empresa.email) {
        return true;
      }
      return false;
    },
  },
  beforeMount() {
    this.adicionaFlags();
  },
  methods: {
    atualizaEtapa(novaEtapa) {
      this.etapaAtual = novaEtapa;
      this.enviarRespostas();
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
    setEmpresa(empresa) {
      this.empresa = empresa;
    },
    exibeResultado(resultado) {
      this.resultado = resultado;
      this.enviarRespostas();
      window.scrollTo(0, 0);
    },
    enviarRespostas() {
      const body = {
        conteudo: {
          etapaAtual: this.etapaAtual,
          resultado: this.resultado,
          etapas: this.etapas,
        },
      };

      const id = this.idFormulario;
      if (id) {
        const url = `/formulario/simulacao/${id}/`;
        API.put(url, body).then((r) => { this.idFormulario = r.data.id; });
        return;
      }

      const url = '/formulario/simulacao/';
      API.post(url, body).then((r) => { this.idFormulario = r.data.id; });
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
