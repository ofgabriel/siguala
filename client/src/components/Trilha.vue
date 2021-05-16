<template>
  <div>
    <v-row
      v-if="$vuetify.breakpoint.smAndDown"
      justify="space-between"
      align="center"
      class="px-5 mb-2"
    >
      <template
        v-for="(etapa, i) in etapas"
        class="d-flex"
      >
        <v-btn
          :key="`btn-${i}`"
          x-small
          fab
          :color="getStepBackgroudColor(etapa.numero)"
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
        </v-btn>
        <v-divider
          v-if="i + 1 < etapas.length"
          :key="`divder-${i}`"
          role="presentation"
          light
        />
      </template>
    </v-row>
    <v-timeline
      v-else
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
  </div>
</template>

<script>
export default {
  name: 'Trilha',
  props: {
    etapaAtual: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      etapas: [
        {
          numero: 1,
          nome: 'Aceite da Verificação',
          descricao: 'Alguma descrição dessa etapa',
        },
        {
          numero: 2,
          nome: 'Equipe de Implementação',
          descricao: 'Alguma descrição dessa etapa',
        },
        {
          numero: 3,
          nome: 'Análise da Empresa',
          descricao: 'Alguma descrição dessa etapa',
        },
        {
          numero: 4,
          nome: 'Plano de Ação',
          descricao: 'Alguma descrição dessa etapa',
        },
        {
          numero: 5,
          nome: 'Política de Igualdade de Gênero',
          descricao: 'Alguma descrição dessa etapa',
        },
      ],
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
