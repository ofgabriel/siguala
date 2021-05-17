<template>
  <div>
    <v-row
      v-if="$vuetify.breakpoint.smAndDown"
      justify="space-between"
      align="center"
      class="px-5"
    >
      <template
        v-for="(etapa, i) in etapas"
        class="d-flex"
      >
        <v-btn
          :key="`btn-${i}`"
          x-small
          fab
          @click.native="mudancaDeEtapa(etapa)"
          :color="getStepBackgroudColor(etapa.numero, etapa.respondida, etapa.visitada)"
        >
          <v-icon
            v-if="etapa.numero < etapaAtual"
            color="white"
          >
            mdi-check
          </v-icon>
          <span
            v-else
            :class="getStepTextColor(etapa.numero, etapa.visitada)"
          >{{ etapa.numero }}</span>
        </v-btn>
        <v-divider
          v-if="i + 1 < etapas.length"
          :key="`divder-${i}`"
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
        @click.native="mudancaDeEtapa(etapa)"
        :key="i"
        class="my-4"
        :color="getStepBackgroudColor(etapa.numero, etapa.respondida, etapa.visitada)"
        :large="etapa.numero == etapaAtual"
        fill-dot
      >
        <template
          v-slot:icon
        >
          <v-icon
            v-if="etapa.respondida && etapa.numero!=etapaAtual"
            color="white"
          >
            mdi-check
          </v-icon>
          <span
            v-else
            :class="getStepTextColor(etapa.numero, etapa.visitada)"
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
    etapas: {
      type: Array,
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
    mudancaDeEtapa(etapa) {
      if (this.etapaAtual < Object.keys(this.etapas).length+1 && etapa.visitada){
        this.$emit('mudancaDeEtapa', etapa.numero);
      }
    },
    getStepBackgroudColor(stepNumber, respondida, visitada) {
      if (stepNumber === this.etapaAtual) {
        return 'primary';
      }
      // if (stepNumber < this.etapaAtual) {
      //   return 'success';
      // }
      if (visitada){
        if (respondida){
          return 'success';
        }
        return 'warning';
      }
      return 'white';
    },
    getStepTextColor(stepNumber, visitada) {
      if (stepNumber === this.etapaAtual) {
        return 'white--text';
      }
      if (visitada) {
        return 'white--text';
      }
      return 'primary--text';
    },
  },
};
</script>

<style>
.success {
  cursor: pointer;
}
.warning {
  cursor: pointer;
  background-color: darkorange;
}
</style>
