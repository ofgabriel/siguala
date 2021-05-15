<template>
  <v-timeline
    dense
    reverse
  >
    <v-timeline-item
      v-for="(etapa, i) in etapas"
      :key="i"
      class="my-4"
      :color="getStepBackgroudColor(etapa.numero)"
      :large="etapa.numero == etapaAtual"
      fill-dot
    >
      <template
        v-slot:icon
      >
        <v-icon
          v-if="etapa.numero < etapaAtual"
          color="white"
        >
          mdi-check
        </v-icon>
        <span
          v-else
          :class="getStepTextColor(etapa.numero)"
        >{{ etapa.numero }}</span>
      </template>
      <v-row>
        <v-col>
          <strong>{{ etapa.nome }}</strong>
          <div class="caption">
            {{ etapa.descricao }}
          </div>
        </v-col>
      </v-row>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: 'Trilha',
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

    };
  },
  methods: {
    getStepBackgroudColor(stepNumber) {
      if (stepNumber === this.etapaAtual) {
        return 'primary';
      }
      if (stepNumber < this.etapaAtual) {
        return 'success';
      }
      return 'white';
    },
    getStepTextColor(stepNumber) {
      if (stepNumber === this.etapaAtual) {
        return 'white--text';
      }
      return 'primary--text';
    },
  },
};
</script>

<style>
</style>
