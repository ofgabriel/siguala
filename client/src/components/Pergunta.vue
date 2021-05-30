<template>
  <v-radio-group
    @change="$emit('resposta', $event)"
  >
    <div class="subtitle-1 mb-2">
      {{ pergunta }}
    </div>
    <v-radio
      value="sim"
      label="Sim"
      :off-icon="respostaPrevia === 'sim' ? '$radioOn' : '$radioOff'"
    />
    <v-radio
      value="nao"
      label="Não"
      :off-icon="respostaPrevia === 'nao' ? '$radioOn' : '$radioOff'"
    />
  </v-radio-group>
</template>

<script>

export default {
  name: 'Pergunta',
  props: {
    pergunta: {
      type: String,
      required: true,
    },
    respostaPrevia: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
};
</script>
