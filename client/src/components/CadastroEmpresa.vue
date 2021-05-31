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
        type="tel"
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
import API from '../api';

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
      this.valido = this.$refs.form.validate();
      if (!this.valido) {
        return;
      }
      this.empresa.cnpj = this.empresa.cnpj.replace(/[^\d]+/g, '');

      const body = this.empresa;
      const url = '/cadastro/empresas/';

      API.post(url, body)
        .then((res) => {
          console.log(res);
          this.empresa.id = res.data.id;
          this.$emit('empresaCadastrada', this.empresa);
        })
        .catch((error) => {
          console.log(error.message);
          alert('Erro ao salvar informações da empresa. Verifique oc campos e tente novamente');
        });
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
