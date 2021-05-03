<template>
  <v-container>
    <hello-world />
  </v-container>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',

  components: {
    HelloWorld,
  },
};
</script>
