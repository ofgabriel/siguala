<template>
  <v-row class="text-center home-destaque">
    <v-row class="d-flex justify-space-around mb-6 destaque-texto">
      <v-col class="pa-2">
        <h1 class="header-boas-vindas">
          Ajudamos sua empresa a promover um ambiente mais igualitário
        </h1>
        <h3 class="paragrafo-boas-vindas">
          Empresas que possibilitam um ambiente mais justo para os seus
          funcionários possuem resultados financeiros mais expressivos.
        </h3>
        <v-row>
          <v-btn
            class="botao-home"
            color="primary"
            :to="{ name: 'Simulacao' }"
          >
            Simule seu selo
          </v-btn>
        </v-row>
      </v-col>
      <v-col
        v-if="$vuetify.breakpoint.width > 700"
        class="pa-2"
      >
        <img :src="imagem">
      </v-col>
    </v-row>
    <v-col
      v-if="$vuetify.breakpoint.width <= 700"
      cols="12"
      class="img-div"
    >
      <img :src="imagem">
    </v-col>
  </v-row>
</template>

<script>
import imagemHome from '../../public/imagem_home.png';

export default {
  name: 'InformacoesBasicas',
  data() {
    return {
      imagem: imagemHome,
    };
  },
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
    text-align: left;
    color: white;
    font-weight: 700;
    font-size: 36px;
    line-height: 56px;
    letter-spacing: 2px;
  }
  .paragrafo-boas-vindas {
    color: white;
    text-align: left;
    font-weight: 500;
    font-size: 19px;
    line-height: 40px;
    letter-spacing: 2px;
  }
  .botao-home {
    left:0;
    margin-top:50px;
    margin-bottom:30px;
    margin-left:16px;
  }
  .home-destaque {
    position: absolute;
    padding-top:20px;
    left: 0;
    right: 0;
    background-color: #7C7C7C;
  }
  .destaque-texto {
    padding-top: 30px;
    padding-left:10%;
    padding-right:10%;
  }
  img {
    max-width: 400px;
    width: 100%;
    margin:auto;
    margin-top:10px;
  }
  .img-div img {
    max-width: 530px;
  }
  .img-div {
    height: auto;
    padding: 0;
    background-color: white;
  }

</style>
