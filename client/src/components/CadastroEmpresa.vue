<template>
  <div>
    <div class="title">
      Informações da Empresa
    </div>
    <v-form
      ref="form"
      v-model="valido"
      lazy-validation
    >
      <v-text-field
        v-model="empresa.nome"
        :counter="campos.nome.limiteDeCaracteres"
        :rules="campos.nome.regras"
        :label="campos.nome.label"
        required
      />
      <v-text-field
        v-model="empresa.cnpj"
        :rules="campos.cnpj.regras"
        :label="campos.cnpj.label"
        required
      />

      <v-text-field
        v-model="empresa.email"
        :rules="campos.email.regras"
        :label="campos.email.label"
        required
      />

      <v-checkbox
        v-model="aceite"
        :rules="campos.aceite.regras"
        :label="campos.aceite.label"
        required
      />
      <v-btn
        class="float-right"
        :color="corDoBotao"
        @click="cadastraEmpresa"
      >
        Continuar
      </v-btn>
    </v-form>
  </div>
</template>
<script>
import { cnpj as cnpjValidador } from 'cpf-cnpj-validator';

export default {
  name: 'CadastroEmpresa',
  data() {
    return {
      empresa: {
        nome: null,
        cnpj: null,
        email: null,
      },
      aceite: false,
      campos: {
        nome: {
          label: 'Nome da empresa',
          regras: [
            (v) => !!v || 'Nome é obrigatório',
            (v) => (v && v.length <= 100) || 'O nome deve ser menor que 100 caracteres',
          ],
          limiteDeCaracteres: 100,
        },
        email: {
          label: 'E-mail',
          regras: [
            (v) => !!v || 'E-mail é obrigatário',
            (v) => /.+@.+\..+/.test(v) || 'O e-mail deve ser válido',
          ],
        },
        cnpj: {
          label: 'CNPJ',
          regras: [
            (v) => !!v || 'CNPJ é obrigatório',
            (v) => this.validaCNPJ(v) || 'CNPJ deve ser válido',
          ],
        },
        aceite: {
          label: 'Eu concordo que este processo é apenas uma simulação e que não há emissão oficial de selo nem qualquer garantia de que o resultado desta simulação será o mesmo de um processo verdadeiro.',
          regras: [(v) => !!v || 'Você deve aceitar para continuar!'],
        },
      },
      valido: true,
    };
  },
  computed: {
    corDoBotao() {
      if (!this.valido) {
        return 'error';
      }
      return 'success';
    },
  },
  methods: {
    cadastraEmpresa() {
      this.$refs.form.validate();
      if (!this.valido) {
        return;
      }
      // chamar api e cadastrar empresa aqui?
      this.$emit('empresaCadastrada', this.empresa);
    },
    validaCNPJ(cnpj) {
      if (!cnpj) {
        return true;
      }

      const numeroCNPJ = cnpj.replace(/[^\d]+/g, '');

      return cnpjValidador.isValid(numeroCNPJ);
    },
  },
};
</script>
