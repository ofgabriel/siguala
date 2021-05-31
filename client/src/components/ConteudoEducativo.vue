<template>
  <v-row class="text-center">
    <v-col>
      <v-card
        v-for="(conteudo, index) in conteudos"
        :key="index"
        elevation="6"
        class="mx-auto conteudo text-left"
      >
        <v-card-title>
          {{ conteudo.titulo }}
        </v-card-title>
        <v-card-text>
          {{ conteudo.texto }}
        </v-card-text>
        <v-card-actions>
          <v-btn
            text
            color="primary"
            :href="conteudo.link"
          >
            Saiba mais
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ConteudoEducativo',
  props: {
    conteudos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.conteudo {
    max-width: 35rem !important;
    margin-top: 1rem;
}
</style>
