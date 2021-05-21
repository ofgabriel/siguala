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
          :color="getStepBackgroudColor(etapa)"
        >
          <v-icon
            v-if="etapa.numero < etapaAtual"
            color="white"
          >
            mdi-check
          </v-icon>
          <span
            v-else
            :class="getStepTextColor(etapa)"
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
        :color="getStepBackgroudColor(etapa)"
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
            :class="getStepTextColor(etapa)"
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
    getStepBackgroudColor(etapa) {
      if (etapa.numero === this.etapaAtual) {
        return 'primary';
      }
      if (etapa.visitada){
        if (etapa.respondida){
          return 'success';
        }
        return 'warning';
      }
      return 'white';
    },
    getStepTextColor(etapa) {
      if (etapa.numero === this.etapaAtual) {
        return 'white--text';
      }
      if (etapa.visitada) {
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
}
</style>
