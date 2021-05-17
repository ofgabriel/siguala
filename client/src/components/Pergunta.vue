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
    />
    <v-radio
      value="nao"
      label="Não"
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
  },
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
};
</script>
