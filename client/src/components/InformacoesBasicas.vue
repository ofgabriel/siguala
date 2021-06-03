<template>
  <v-row
    align="center"
    justify="center"
    no-gutters
    :class="{'home-mob':$vuetify.breakpoint.width <= 700,
             'home':$vuetify.breakpoint.width > 700}"
  >
    <v-col
      cols="12"
      md="7"
      color="secondary"
      class="destaque-texto"
    >
      <h1 class="header-boas-vindas">
        Ajudamos sua empresa a promover um ambiente mais igualitário
      </h1>
      <h3 class="paragrafo-boas-vindas">
        Empresas que possibilitam um ambiente mais justo para os seus
        funcionários possuem resultados financeiros mais expressivos.
      </h3>
      <v-btn
        class="botao-home"
        color="primary"
        :to="{ name: 'Simulacao' }"
        min-width="200px"
      >
        Simule seu selo
      </v-btn>
    </v-col>
    <v-col
      cols="12"
      md="5"
    >
      <v-img
        :src="imagem"
      />
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
    .home {
      padding: 0;
    }
  }

  .header-boas-vindas {
    padding: 30px;
    text-align: left;
    color: white;
    font-weight: 700;
    font-size: 36px;
    line-height: 56px;
    letter-spacing: 2px;
  }
  .paragrafo-boas-vindas {
    color: white;
    padding: 30px;
    text-align: left;
    font-weight: 500;
    font-size: 19px;
    line-height: 40px;
    letter-spacing: 2px;
  }
  .botao-home {
    left:0;
    margin-top:30px;
    margin-bottom:50px;
    margin-left:30px;
    text-align: center;
  }
  .home {
    background-color: #7C7C7C;
    width:100%;
    text-align: left;
    padding: 24px;
  }
  .home-mob {
    background-color: #7C7C7C;
    text-align: left;
    width:100%;
  }
  .destaque-texto {
    max-width: 700px;
  }

</style>
