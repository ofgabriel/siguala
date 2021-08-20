<template>
  <div>
    <v-row
      justify="space-around"
      align="center"
      class="explicacao explicacao-processo"
    >
      <v-col
        cols="12"
      >
        <h2>
          Como funciona o processo
        </h2>
      </v-col>
    </v-row>
    <v-row
      class="primary--text explicacao-cards"
      align="stretch"
    >
      <v-col
        cols="12 explicacao-processo"
        md="3"
      >
        <v-card
          class="card"
          elevation="0"
        >
          <v-card-title
            class="numero"
          >
            01
          </v-card-title>
          <v-card-subtitle>
            <h2>Cadastre os dados da empresa</h2>
          </v-card-subtitle>
          <v-card-text>
            A empresa deve se cadastrar em nossa plataforma. Antes ou depois de simular o seu selo.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <v-card
          class="card"
          elevation="0"
        >
          <v-card-title class="numero">
            02
          </v-card-title>
          <v-card-subtitle>
            <h2>Preenchimento do formulário</h2>
          </v-card-subtitle>
          <v-card-text>
            Após o cadastro, leia atentamente o nosso formulário, dividido em quatro etapas,
            e submeta os documentos requisitados.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <v-card
          class="card"
          elevation="0"
        >
          <v-card-title class="numero">
            03
          </v-card-title>
          <v-card-subtitle>
            <h2>Análise</h2>
          </v-card-subtitle>
          <v-card-text>
            Será avaliado se as políticas atuais da empresa correspondem
            ao nosso selo bronze, prata ou ouro.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <v-card
          class="card"
          elevation="0"
        >
          <v-card-title class="numero">
            04
          </v-card-title>
          <v-card-subtitle>
            <h2>Plano de Ação</h2>
          </v-card-subtitle>
          <v-card-text>
            Será elaborado um plano de ação, a partir do qual definiremos
            quais questões devem ser reavaliadas dentro da empresa.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'ExplicacaoEtapas',
  data() {
    return {
    };
  },
};
</script>

<style>
  .explicacao {
    padding: 40px 54px 10px 54px;
  }
  .explicacao-processo {
    max-width: 1350px;
  }
  .numero {
    font-weight: 500 !important;
    font-size: 18px !important;
    color: #905BB4;
  }
  .card {
    height: 100%;
    text-align: left;
  }
</style>
