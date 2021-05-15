<template>
  <v-row class="text-center">
    <v-col cols="12">
      <h1 class="header-boas-vindas">
        Bem-vind@ ao Selo Diversidade!
      </h1>
      <p class="paragrafo-boas-vindas">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan ligula nec felis
        consequat, vel tincidunt nisl dapibus. Quisque id erat rhoncus, consequat sem efficitur,
        tempus lacus. Ut et ligula ultrices ante volutpat congue non sit amet lorem. In molestie, ex
        lacinia tempus commodo, nisi nisl accumsan dolor, at ullamcorper sem mi et ligula. Nunc
        ornare ut felis et posuere. In ornare dignissim accumsan. Integer dapibus, turpis nec
        accumsan placerat, erat libero porta felis, aliquam rutrum dui orci vel leo. Sed id posuere
        arcu, vel hendrerit odio. Praesent dignissim viverra orci, non eleifend risus hendrerit eu.
        Suspendisse sit amet risus.
      </p>
      <v-btn
        color="success"
        :to="{ name: 'Simulacao' }"
      >
        <v-icon left>
          mdi-postage-stamp
        </v-icon>
        Simule seu selo
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InformacoesBasicas',

  data: () => ({
  }),
};
</script>

<style>
  @media only screen and (max-width: 600px) {
    .header-boas-vindas {
      font-size: 1.4rem;
    }
  }

  .header-boas-vindas {
    margin-bottom: 2rem;
  }
  .paragrafo-boas-vindas {
    text-align: justify;
    text-indent: 2rem;
  }
</style>
