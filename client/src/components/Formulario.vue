<template>
  <div>
    <v-radio-group
      v-for="(campo, index) in etapas[etapaAtual].campos"
      :key="index"
      v-model="campo.valor"
      mandatory
    >
      <template v-slot:label>
        <h3>{{ campo.pergunta }}</h3>
      </template>
      <v-radio
        v-for="(opcao, indexOpcao) in opcoes"
        :key="indexOpcao"
        :value="opcao.value"
      >
        <template v-slot:label>
          <div>{{ opcao.label }}</div>
        </template>
      </v-radio>
    </v-radio-group>
    <v-btn
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

export default {
  name: 'Formulario',
  props: {
    etapas: {
      type: Object,
      required: true,
    },
    etapaAtual: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      radios: null,
      opcoes: [
        {
          label: 'Sim',
          value: true,
        },
        {
          label: 'Não',
          value: false,
        },
      ],
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
  },
  methods: {
    mudancaDeEtapa() {
      this.$emit('mudancaDeEtapa', this.proximaEtapa);
    },
    submeter() {
      alert('Formulário submetido!');
    },
  },
};
</script>

<style>

</style>
